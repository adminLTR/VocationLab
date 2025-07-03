// CommentInput.tsx
import { act, useEffect, useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { 
  chatApi
} from '../../../services/api';

interface MessageProps {
  message: string,
  user: boolean
}
interface RiasecCounter {
  realista: number;
  investigador: number;
  artistico: number;
  social: number;
  emprendedor: number;
  convencional: number;
}

interface CommentBoxProps {
  chatMessages: MessageProps[];
  setChatMessages: React.Dispatch<React.SetStateAction<MessageProps[]>>;
  riasec_counter: RiasecCounter;
  setRiasecCounter: React.Dispatch<React.SetStateAction<RiasecCounter>>;
  actual_state: string;
  setActualState: React.Dispatch<React.SetStateAction<string>>
  asked_questions: number[];
  setAskedQuestions: React.Dispatch<React.SetStateAction<number[]>>;
  fails: number;
  setFails: React.Dispatch<React.SetStateAction<number>>
}

export default function CommentBox({ chatMessages, setChatMessages, 
    riasec_counter, setRiasecCounter, 
    asked_questions, setAskedQuestions, 
    fails,
    setFails,
    actual_state, setActualState }: CommentBoxProps) 
  {

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

      const response = await chatApi({ user_message, actual_state, asked_questions });
      botMessage = response.data.message

      console.log(response.data)

      if (response.data.label) {
        setRiasecCounter({...riasec_counter, [actual_state as keyof RiasecCounter]: riasec_counter[actual_state as keyof RiasecCounter] + 1,})          
      } else {
        setFails(fails+1);
      }
      if (response.data.id_question) {
        setAskedQuestions([...asked_questions, response.data.id_question])
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
