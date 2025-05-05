import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Header() {
   return (
    <header className="w-full px-4 py-3 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-xl font-bold text-gray-800">
          <Link to={'/'}>
            <img src="/logo_light_2.png" alt="Logo" className="mr-2" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex justify-center space-x-6 mt-2 md:mt-0">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
            Inicio
          </Link>
          <Link to="/testimonios" className="text-gray-600 hover:text-blue-600 transition">
            Testimonios
          </Link>
          <Link to="/nosotros" className="text-gray-600 hover:text-blue-600 transition">
            Nosotros
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};
