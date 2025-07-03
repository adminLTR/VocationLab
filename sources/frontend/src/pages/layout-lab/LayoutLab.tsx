import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import bgSvg from "../../assets/bg-svg/bg-chat.svg"

export default function LayoutLab() {


    return (
        <div className="flex h-full">
            <img
                src={bgSvg}
                alt="bg"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />
            <aside className="relative h-full w-2/12">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D2D1FF] to-[#D2D1FF] opacity-50 z-0"></div>

                <div className="relative z-10 py-8 px-6 flex flex-col h-full">
                    <div className="flex items-center flex-shrink-0 text-xl font-bold text-gray-800">
                        <Link to="/" className="flex items-center text-[18px]">
                            <img src="/logo_header.png" alt="Logo" className="mr-2" width={24} />
                            <span>VocationLab</span>
                        </Link>
                    </div>
                    <nav className="flex flex-col grow py-10 gap-5">
                        <Link
                            to="/lab"
                            className="flex font-inter text-[20px] font-semibold items-center gap-4 text-transparent bg-clip-text bg-gradient-to-t from-[#A629FF] to-[#1DD1CB]"
                        >
                            <i className="w-1/12 fa-solid fa-robot"></i> Test
                        </Link>
                        <Link
                            to="/lab/carreras"
                            className="flex font-inter text-[20px] font-semibold items-center gap-4 text-transparent bg-clip-text bg-gradient-to-t from-[#A629FF] to-[#1DD1CB]"
                        >
                            <i className="w-1/12 fa-solid fa-briefcase"></i> Carreras
                        </Link>
                        <Link
                            to="/lab/universidades"
                            className="flex font-inter text-[20px] font-semibold items-center gap-4 text-transparent bg-clip-text bg-gradient-to-t from-[#A629FF] to-[#1DD1CB]"
                        >
                            <i className="w-1/12 fa-solid fa-graduation-cap"></i> Universidades
                        </Link>
                        <Link
                            to="/lab/recursos"
                            className="flex font-inter text-[20px] font-semibold items-center gap-4 text-transparent bg-clip-text bg-gradient-to-t from-[#A629FF] to-[#1DD1CB]"
                        >
                            <i className="w-1/12 fa-solid fa-shapes"></i> Recursos
                        </Link>
                    </nav>
                    <div>
                        <Link
                            to="/"
                            className="flex font-inter text-[20px] font-semibold items-center gap-4 text-transparent bg-clip-text bg-gradient-to-t from-[#A629FF] to-[#1DD1CB]"
                        >
                            <i className="w-1/12 fa-solid fa-right-from-bracket"></i> Salir del Lab
                        </Link>
                    </div>
                </div>
            </aside>

            <main className="grow">
                <Outlet />
            </main>
        </div>
    )
}