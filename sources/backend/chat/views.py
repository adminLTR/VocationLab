from .models import Message
from django.http import JsonResponse
from .services import chroma_client
from django.views.decorators.csrf import csrf_exempt
import json

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

        collection = chroma_client.get_or_create_collection(name="VocationLab")

        results = collection.query(
            query_texts=[user_message],
            n_results=1
        )

        if user_id:
            pass            

        return JsonResponse({'message': f'{results["documents"][0][0]}'})
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON data'}, status=400)
