import { useLoaderData } from "react-router-dom";
import CommentBox from "./components/CommentBox";
import { useState } from "react";
import UserMessage from "./components/UserMessage";

interface MessageProps {
  message: string,
  user: boolean
}
export default function ChatPage() {

    const [chatMessages, setChatMessages] = useState<MessageProps[]>([]);
    const [riasecCounter, setRiasecCounter] = useState({
        r: 0,
        i: 0,
        a: 0,
        s: 0,
        e: 0,
        c: 0,
    })

    return <div className="h-full flex items-center justify-center py-10">
        <div className={`w-fit flex flex-col ${chatMessages.length===0?'items-center':'h-full'}`}>
            {chatMessages.length === 0 ? 
                <div className="text-center">
                    <h2 className="text-[60px] mb-3 font-bold">¿Empezamos con el test?</h2>
                    <p className="mb-10">Descubre tu verdadera vocación en una conversación con IvAn</p>
                </div> 
                : 
                <div className="w-[1000px] py-8 grow space-y-2">
                    {chatMessages.map((chatMessage, index)=>{
                        return <UserMessage key={index} user={chatMessage.user}>
                            {chatMessage.message}
                        </UserMessage>
                    })}
                </div>
            }
            
            <CommentBox 
                chatMessages={chatMessages} 
                setChatMessages={setChatMessages}
                riasec_counter={riasecCounter}
                setRiasecCounter={setRiasecCounter}
            />
        </div>
    </div>
}