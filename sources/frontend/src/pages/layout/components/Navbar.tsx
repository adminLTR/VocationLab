import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: ReactNode;
  active?:boolean
}
function NavLink({children, to, active=false} : NavLinkProps) {
    return <Link to={to} className={`transition font-bold px-2 py-2 hover:text-black ${active?'border-b-4 text-black':'border-b-0 text-gray-350'} border-b-main-200`}>
        {children}
    </Link>
}

export default function Navbar() {
    const location = useLocation();

    return <nav className="flex justify-center space-x-4 pt-1 px-3 rounded-3xl mt-2 md:mt-0">
        <NavLink to="/" active={location.pathname === '/'}>
            Inicio
        </NavLink>
        <NavLink to="/testimonios" active={location.pathname === '/testimonios'}>
            Testimonios
        </NavLink>
        <NavLink to="/nosotros" active={location.pathname === '/nosotros'}>
            Nosotros
        </NavLink>
    </nav>
}