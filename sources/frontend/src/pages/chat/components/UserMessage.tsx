import { ReactNode } from "react"

interface UserMessageProps {
    children: ReactNode,
    user: boolean,
    isLoading?: boolean
}
export default function UserMessage({children, user, isLoading}: UserMessageProps) {
    return <div className={`flex ${user?'justify-end' : 'justify-start'}`}>
        <div className={`max-w-[550px] py-2 px-3 rounded-xl ${user?'bg-[#1DD1CB]':'bg-[#8379F5]'} text-white`}>
            {isLoading ? (
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            ) : (
                children
            )}
        </div>
    </div>
}