import Title from "../../components/Title";
import { Link } from "react-router-dom";

export default function NosotrosPage() {

    return <div>
        <div className="text-center">
            <div className="w-fit m-auto p-0">
                <Title>
                    <span className="text-[60px]">Nuestro </span>
                    <span className="text-transparent text-[60px] bg-clip-text bg-gradient-to-r from-main-500 to-secondary-600">
                        equipo
                    </span>
                </Title>
            </div>
            <p className="text-[#BDCFE2] text-[40px] font-medula">Apasionados. Creativos. Alcohólicos.</p>
            <div >
                <div className="bg-red-100 w-fit m-auto py-4 px-10 rounded-xl">
                    <div className="pb-5">
                        <img className="block m-auto mb-2 rounded-full" src="/yo_mejorado.png" alt="" />
                        <p className="font-inter text-[18px] font-semibold">Hugo Álvarez</p>
                        <p className="font-inter text-[16px] font-medium text-[#7B8C9F]">Word Senior</p>
                    </div>
                    <div className="flex gap-5 items-center justify-center">
                        <Link to="#" style={{fontSize: '20px'}}>
                            <i className="fa-brands fa-github"></i>
                        </Link>
                        <Link to="#" style={{fontSize: '20px'}}>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link to="#" style={{fontSize: '20px'}}>
                            <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}