import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
    children: ReactNode,
    onClick?: () => void
}
function Button({children, onClick = ()=>{}} : ButtonProps) {
    return <button onClick={onClick}
    className="text-center rounded-3xl bg-black text-white px-4 py-2 font-bold cursor-pointer hover:bg-gray-800" 
    style={{fontSize: '14px'}}>
        {children}
    </button>
}


interface SocialMediaLinksProps {
  setShowModal: (x:boolean) => void
}
export default function SocialMediaLinks({setShowModal}:SocialMediaLinksProps) {
    return <div className="flex space-x-4 mt-2 md:mt-0 items-center">
        <Button onClick={()=>setShowModal(true)}>
            Login / Register
        </Button>
        <div className="flex gap-2 items-center">
            <Link to="#" className="text-[20px] bg-white px-2 py-1 rounded-lg">
                <i className="fa-brands fa-github"></i>
            </Link>
            <Link to="#" className="text-[20px] bg-white px-2 py-1 rounded-lg">
                <i className="fa-brands fa-x-twitter"></i>
            </Link>
        </div>
    </div>
}