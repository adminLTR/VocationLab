import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
    children: ReactNode,
    onClick?: () => void
}
function Button({children, onClick = ()=>{}} : ButtonProps) {
    return <button onClick={onClick}
    className="text-center rounded-3xl bg-black text-white px-4 py-2 font-bold" style={{fontSize: '14px'}}>
        {children}
    </button>
}

export default function SocialMediaLinks() {
    return <div className="flex space-x-4 mt-2 md:mt-0 items-center">
        <Button>
            Login / Register
        </Button>
        <div className="flex gap-2 items-center">
            <Link to="#" style={{fontSize: '20px'}}>
                <i className="fa-brands fa-github"></i>
            </Link>
            <Link to="#" style={{fontSize: '20px'}}>
                <i className="fa-brands fa-x-twitter"></i>
            </Link>
        </div>
    </div>
}