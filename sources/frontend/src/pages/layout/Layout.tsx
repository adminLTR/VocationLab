import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.tsx"
import ModalLogin from "../../components/ModalLogin.tsx";

export default function Layout() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Header setShowModal={setShowModal}/>
            <main className="max-w-10/12 mx-auto">
                <Outlet/>
            </main>
            {showModal && <ModalLogin setShowModal={setShowModal}/>}
        </div>
    )
}