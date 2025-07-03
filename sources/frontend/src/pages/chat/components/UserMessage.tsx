import { ReactNode } from "react"

interface UserMessageProps {
    children: ReactNode,
    user: boolean
}
export default function UserMessage({children, user}: UserMessageProps) {
    return <div className={`flex ${user?'justify-end' : 'justify-start'}`}>
        <div className={`max-w-[400px] py-2 px-3 rounded-xl ${user?'bg-[#1DD1CB]':'bg-[#8379F5]'} text-white`}>
            {children}
        </div>
    </div>
}