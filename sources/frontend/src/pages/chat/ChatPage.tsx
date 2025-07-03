// ChatPage.tsx
import { useState } from "react";
import CommentBox from "./components/CommentBox";
import UserMessage from "./components/UserMessage";

export interface ChatHistoryItem {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);

  return (
    <div className="h-full flex items-center justify-center py-10">
      <div className={`w-fit flex flex-col ${chatHistory.length === 0 ? 'items-center' : 'h-full'}`}>
        {chatHistory.length === 0 ? (
          <div className="text-center">
            <h2 className="text-[60px] mb-3 font-bold">¿Empezamos con el test?</h2>
            <p className="mb-10">Descubre tu verdadera vocación en una conversación con IvAn</p>
          </div>
        ) : (
          <div className="w-[1000px] py-8 grow space-y-2">
            {chatHistory.map((msg, index) => (
              <UserMessage key={index} user={msg.role === "user"}>
                {msg.content}
              </UserMessage>
            ))}
          </div>
        )}

        <CommentBox chatHistory={chatHistory} setChatHistory={setChatHistory} />
      </div>
    </div>
  );
}
