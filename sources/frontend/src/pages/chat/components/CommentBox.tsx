// components/CommentBox.tsx
import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { chatApi } from "../../../services/api";
import { ChatHistoryItem } from "../ChatPage";


interface Props {
  chatHistory: ChatHistoryItem[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatHistoryItem[]>>;
}

export default function CommentBox({ chatHistory, setChatHistory }: Props) {
  const [comment, setComment] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addEmoji = (emoji: any) => {
    setComment((prev) => prev + emoji.native);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = async () => {
    const userMessage = comment.trim();
    if (!userMessage || isLoading) return;

    setComment("");
    setShowEmojiPicker(false);
    setIsLoading(true);

    const updatedHistory = [...chatHistory, { role: "user", content: userMessage } as const];
    setChatHistory(updatedHistory);

    // Add loading message for bot
    const historyWithLoading = [...updatedHistory, { role: "assistant", content: "", isLoading: true } as const];
    setChatHistory(historyWithLoading);

    try {
      const response = await chatApi({
        message: userMessage,
        history: chatHistory,
      });

      const botReply = response.data.response;
      const newHistory = [
        ...updatedHistory,
        { role: "assistant", content: botReply } as const
      ];

      setChatHistory(newHistory);
    } catch (err) {
      console.error("Error al obtener respuesta del bot", err);
      // Remove loading message on error
      setChatHistory(updatedHistory);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative w-full mx-auto`}>
      <div className="bg-[#8379F5] rounded-4xl text-white p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
        <textarea
          rows={2}
          className="w-full resize-none outline-none placeholder:text-gray-200 text-white bg-transparent"
          placeholder="Dile hola a IvAn..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <div className="flex justify-end items-center gap-4">
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="cursor-pointer text-lg hover:text-gray-200 transition"
          >
            <i className="fa-regular fa-face-smile"></i>
          </button>
          <button
            onClick={handleSend}
            className="cursor-pointer text-lg text-white-400 hover:text-gray-200 transition"
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>

      {showEmojiPicker && (
        <div className="absolute bottom-16 right-0 z-10">
          <Picker data={data} onEmojiSelect={addEmoji} theme="light" />
        </div>
      )}
    </div>
  );
}
