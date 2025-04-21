from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .chroma_client import collection
import json
import pprint

@csrf_exempt
def buscar_similares(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        query = data.get('query')

        if not query:
            return JsonResponse({'error': 'No se recibió un texto para buscar.'}, status=400)


        results = collection.query(
            query_texts=[query],
            n_results=5
        )
        pprint.pprint(results)
        return JsonResponse({
            "documentos": results.get("documents", [[]])[0],
            "ids": results.get("ids", [[]])[0],
            "distancias": results.get("distances", [[]])[0]
        })

    return JsonResponse({'error': 'Método no permitido'}, status=405)