import { Outlet } from "react-router-dom";
import Header from "./components/Header.tsx"

export default function Layout() {
    return (
        <div>
            <Header/>
            <main className="max-w-10/12 mx-auto my-20">
                <Outlet/>
            </main>
        </div>
    )
}