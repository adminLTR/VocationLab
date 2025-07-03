// CommentInput.tsx
import { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { 
  chatApi
} from '../../../services/api';

interface MessageProps {
  message: string,
  user: boolean
}
interface CommentBoxProps {
  chatMessages: MessageProps[]
  setChatMessages: React.Dispatch<React.SetStateAction<MessageProps[]>>
}
export default function CommentBox({chatMessages, setChatMessages} : CommentBoxProps) {
  const [comment, setComment] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addEmoji = (emoji: any) => {
    setComment(prev => prev + emoji.native);

  };

  const handleSend = async () => {
    const user_message = comment.trim();
    setShowEmojiPicker(false)
    setComment('');
    if (user_message) {

      setChatMessages(prev => [...prev, { message: user_message, user: true }]);
      let botMessage;
      if (chatMessages.length < 1) {
        botMessage = "¡Hola! Soy IvAn, tu guía para ayudarte a descubrir qué tipo de profesiones podrían gustarte o en las que podrías destacar. Vamos a conversar sobre tus intereses, habilidades y valores. No hay respuestas correctas o incorrectas, solo cuéntame lo que piensas o sientes. ¿Listo para comenzar?"
      } else {
        const response = await chatApi({ user_message });
        botMessage = response.data.message
      }

      setChatMessages(prev => [...prev, { message: botMessage, user: false }]);
      
    }
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="bg-[#8379F5] rounded-4xl text-white p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
        <textarea
          rows={2}
          className="w-full resize-none outline-none placeholder:text-gray-200 text-white"
          placeholder="Dile hola a IvAn..."
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <div className="flex justify-end items-center gap-4">
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className={`cursor-pointer text-lg hover:text-gray-200 transition ${showEmojiPicker ? 'text-gray-200' : 'text-white-400'}`}
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
