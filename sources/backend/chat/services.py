import chromadb
import os

chroma_client = chromadb.PersistentClient(path=os.getenv("CHROMA_PATH"))