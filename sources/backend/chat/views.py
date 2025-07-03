from .models import *
from django.http import JsonResponse
from .services import chroma_client
from django.views.decorators.csrf import csrf_exempt
import json
import random as rd

# Create your views here.
@csrf_exempt
def chat_view(request):
    if request.method != "POST":
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
    
    try:
        # Decode the request body and parse the JSON data
        data = json.loads(request.body.decode('utf-8'))

        # Access data from the parsed JSON
        user_message = data.get('user_message')
        user_id = data.get('user_id')
        # riasec_counter = data.get("riasec_counter")
        actual_state = data.get("actual_state")
        asked_questions = data.get("asked_questions")

        collection = chroma_client.get_or_create_collection(name="VocationLab")

        results = collection.query(
            query_texts=[user_message],
            n_results=1
        )

        print(results)

        if user_id:
            pass            

        category = CategoryAnswer.objects.get(actual_state)
        questions = Question.objects.filter(category=category).exclude(id__in=list(asked_questions))

        question = rd.choice(list(questions))


        return JsonResponse({
            # 'message': f'{results["documents"][0][0]}',
            'message': f'{question.question}',
            # 'label' : f'{results["metadatas"][0][0]}'
        })
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON data'}, status=400)
