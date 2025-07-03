import { useLoaderData } from "react-router-dom";
import CommentBox from "./components/CommentBox";
import { useEffect, useState } from "react";
import UserMessage from "./components/UserMessage";

interface RiasecCounter {
  realista: number;
  investigador: number;
  artistico: number;
  social: number;
  emprendedor: number;
  convencional: number;
}
interface MessageProps {
  message: string,
  user: boolean
}
export default function ChatPage() {

    const [chatMessages, setChatMessages] = useState<MessageProps[]>([]);
    const [riasecCounter, setRiasecCounter] = useState({
        realista: 0,
        investigador: 0,
        artistico: 0,
        social: 0,
        emprendedor: 0,
        convencional: 0,
    })
    const [actualState, setActualState] = useState("realista");
    const [askedQuestions, setAskedQuestions] = useState<number[]>([]);
    const [fails, setFails] = useState(0);
    const states = ["realista", "investigador", "artistico", "social", "emprendedor", "convencional"];

    useEffect(() => {
        if (riasecCounter[actualState as keyof RiasecCounter] > 3 || fails >= 3) {
            setActualState(states[states.indexOf(actualState)+1]);
        }
        if (fails === 3) {
            setFails(0);
        }
    }, [riasecCounter, fails])


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
                actual_state={actualState}
                setActualState={setActualState}
                asked_questions={askedQuestions}
                fails={fails}
                setFails={setFails}
                setAskedQuestions={setAskedQuestions}
            />
        </div>
    </div>
}