import { Outlet } from "react-router-dom";
import Header from "./components/Header.tsx"

export default function Layout() {
    return (
        <div>
            <Header/>
            <main className="max-w-7xl mx-auto my-10">
                <Outlet/>
            </main>
        </div>
    )
}