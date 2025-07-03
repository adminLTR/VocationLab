// ChatPage.tsx
import { useState, useEffect, useRef } from "react";
import CommentBox from "./components/CommentBox";
import UserMessage from "./components/UserMessage";

export interface ChatHistoryItem {
  role: "user" | "assistant";
  content: string;
  isLoading?: boolean;
}

export default function ChatPage() {
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="h-full flex items-center justify-center py-10">
      <div className={`relative w-full flex flex-col ${chatHistory.length === 0 ? 'items-center' : 'h-full justify-between'}`}>
        {chatHistory.length === 0 ? (
          <div className="text-center">
            <h2 className="text-[60px] mb-3 font-bold">¿Empezamos con el test?</h2>
            <p className="mb-10">Descubre tu verdadera vocación en una conversación con IvAn</p>
          </div>
        ) : (
          <div ref={chatContainerRef} className="w-full py-8 grow space-y-2 overflow-y-auto">
            {chatHistory.map((msg, index) => (
              <UserMessage key={index} user={msg.role === "user"} isLoading={msg.isLoading}>
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
