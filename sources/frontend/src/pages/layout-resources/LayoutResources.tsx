import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function LayoutResources() {


    return (
        <div className="flex h-full">
            <aside className="h-full bg-gradient-to-b from-[#D2D1FF] to-[#D2D1FF] py-8 px-6 w-2/12 flex flex-col">
                <div className="flex items-center flex-shrink-0 text-xl font-bold text-gray-800">
                    <Link to={'/'} className="flex items-center text-[18px]">
                        <img src="/logo_header.png" alt="Logo" className="mr-2" width={24} />
                        <span className="inline">VocationLab</span>
                    </Link>
                </div>
                <nav>
                    <Link to={'/'}>
                    
                    </Link>
                </nav>
            </aside>
            <main className="grow">
                <Outlet/>
            </main>
        </div>
    )
}