from openai import OpenAI
from openai.types.chat import ChatCompletionMessageParam
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import os
import json

client = OpenAI(api_key=os.getenv("OPENAI_KEY"))

SYSTEM_MESSAGE: ChatCompletionMessageParam = {
    "role": "system",
    "content": (
        "Eres un psicólogo vocacional que guía a un estudiante de secundaria "
        "en un test basado en RIASEC. Tu objetivo es conocer al estudiante, "
        "hacer preguntas abiertas según el modelo RIASEC, y explorar intereses, habilidades, valores y entorno laboral."
    )
}

@csrf_exempt
def vocacional_chat(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            user_message = data.get("message")
            #print(f"Message: {user_message}")
            history = data.get("history", [])

            messages: list[ChatCompletionMessageParam] = [SYSTEM_MESSAGE] + history + [
                {"role": "user", "content": user_message}
            ]

            response = client.chat.completions.create(
                model="gpt-4",
                messages=messages,
                temperature=0.7,
                max_tokens=200,
            )

            return JsonResponse({
                "response": response.choices[0].message.content
            })

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Método no permitido"}, status=405)
