import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
    onClick?: () => void
}
export default function Button({children, onClick = ()=>{}} : ButtonProps) {
    return <button onClick={onClick}
    className="text-center rounded-3xl bg-black text-white px-4 py-2">
        {children}
    </button>
}