from openai import OpenAI
from openai.types.chat import ChatCompletionMessageParam
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import os
import json

client = OpenAI(api_key=os.getenv("OPENAI_KEY"))

STEP_PROMPTS = {
    1: (
        "Estás en el paso 1 del test vocacional. Te llamas IvAn y eres un asistente cálido y amigable. "
        "Da la bienvenida al usuario con una frase empática y cercana. Explica brevemente que le harás preguntas para descubrir qué tipo de profesiones podrían gustarle. "
        "Deja claro que no hay respuestas correctas ni incorrectas. Termina con una pregunta simple como: '¿Listo para comenzar?'. "
        "Importante: Sé breve. No escribas más de 2 a 3 oraciones. Usa frases naturales, como si hablaras con un adolescente."
    ),
    2: (
        "Estás en el paso 2. Tu objetivo es conocer algunos datos del usuario: nombre, edad, ciudad y tipo de colegio. "
        "Haz solo una pregunta clara por turno, por ejemplo: '¿Cómo te llamas?', luego '¿Cuántos años tienes?', etc. "
        "Si el usuario da varios datos en una sola respuesta, puedes pasar al siguiente. Si falta algo, pídeselo con amabilidad. "
        "Evita párrafos o preguntas múltiples. Sé directo y amable."
    ),
    3: (
        "Estás en el paso 3. Vas a explorar los intereses del usuario usando el modelo RIASEC. Empieza con la categoría Realista. "
        "Haz solo una pregunta breve y clara por vez, relacionada con ese tipo de intereses (manuales, prácticos, físicos). Ejemplo: '¿Te gusta arreglar cosas con tus manos?'. "
        "Evita listas de preguntas o explicaciones largas. Cuando termines con 2-3 preguntas Realistas, puedes avanzar a Investigador, y así sucesivamente. "
        "Haz seguimiento si las respuestas son muy vagas, pero siempre con una sola pregunta a la vez."
    ),
    4: (
        "Estás en el paso 4. Pregunta por las habilidades del usuario. Haz preguntas como: '¿En qué cosas eres bueno?', '¿Qué materia se te hace más fácil?'. "
        "Haz solo una pregunta breve por turno. Si responde de forma general, puedes profundizar con algo como: '¿Puedes darme un ejemplo?'. "
        "Evita usar muchas preguntas juntas o hablar demasiado. Mantén el tono conversacional y claro."
    ),
    5: (
        "Estás en el paso 5. Explora valores y motivaciones personales del usuario. Haz una sola pregunta clara por vez. "
        "Ejemplos: '¿Qué te gustaría que tenga tu futuro trabajo?', '¿Qué te motiva a dar lo mejor de ti?'. "
        "No avances si la respuesta es muy superficial. Si es necesario, haz una segunda pregunta breve para profundizar."
    ),
    6: (
        "Estás en el paso 6. Pregunta cómo sería el entorno laboral ideal del usuario. Ejemplos: '¿Preferirías trabajar en equipo o solo?', '¿Te gustaría trabajar en oficina o al aire libre?'. "
        "Haz solo una pregunta por turno. Sé claro y amable. No mezcles muchas opciones en una sola frase."
    ),
    7: (
        "Paso 7. Agradece al usuario por sus respuestas. Luego, analiza lo que ha contado usando el modelo RIASEC. "
        "Detecta las áreas más mencionadas y describe brevemente su perfil vocacional, por ejemplo: 'Parece que tienes un perfil Investigador y Social'. "
        "Usa un lenguaje cercano y positivo. No escribas más de 5 oraciones. No hagas más preguntas en este paso."
    ),
    8: (
        "Paso 8. Sugiere 2 o 3 carreras alineadas con el perfil vocacional detectado. Explica en una o dos frases por qué podrían gustarle. "
        "Luego, ofrece opciones como: '¿Quieres saber más sobre alguna de ellas?', '¿Quieres explorar más profesiones similares?', o '¿Te gustaría hacer otro test?'. "
        "Solo una opción por turno. Mantén un tono motivador, joven y empático."
    ),
}

@csrf_exempt
def vocacional_chat(request):
    if request.method != "POST":
        return JsonResponse({"error": "Método no permitido"}, status=405)

    try:
        data = json.loads(request.body)
        user_message = data.get("message")
        history = data.get("history", [])
        step = int(data.get("step", 1))

        validation_messages = [
            {
                "role": "system",
                "content": (
                    f"Eres un evaluador que determina si una respuesta es adecuada para el paso {step} "
                    "de un test vocacional. Solo responde exactamente con 'true' o 'false'."
                ),
            },
            {"role": "user", "content": f"¿La siguiente respuesta es válida para el paso {step}?: \"{user_message}\""}
        ]

        validation_response = client.chat.completions.create(
            model="gpt-4",
            messages=validation_messages,
            temperature=0,
            max_tokens=10
        )

        result_text = validation_response.choices[0].message.content.strip().lower()
        is_valid = result_text == "true"

        system_message = {
            "role": "system",
            "content": STEP_PROMPTS.get(step, STEP_PROMPTS[1]) + (
                " El usuario aún no ha respondido adecuadamente. Reformula tu pregunta con amabilidad." if not is_valid else ""
            )
        }

        messages: list[ChatCompletionMessageParam] = (
            [system_message] + history + [{"role": "user", "content": user_message}]
        )

        main_response = client.chat.completions.create(
            model="gpt-4",
            messages=messages,
            temperature=0.7,
            max_tokens=300,
        )

        return JsonResponse({
            "response": main_response.choices[0].message.content,
            "nextStep": is_valid
        })

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)