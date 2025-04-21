# chroma_client.py
import chromadb
# from chromadb.config import Settings

persist_directory = "./chroma_db"
client = chromadb.PersistentClient(path=persist_directory)
collection = client.get_or_create_collection(name="careers")
