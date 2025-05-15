import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}
function NavLink({children, to} : NavLinkProps) {
    return <Link to={to} className="transition" style={{color:"#929292"}}>
        {children}
    </Link>
}

export default function Navbar() {
    return <nav className="flex-1 flex justify-center space-x-6 mt-2 md:mt-0">
        <NavLink to="/">
            Inicio
        </NavLink>
        <NavLink to="/testimonios">
            Testimonios
        </NavLink>
        <NavLink to="/nosotros">
            Nosotros
        </NavLink>
    </nav>
}