import Logo from "./Logo";
import Navbar from "./Navbar";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Header() {
   return (
    <header className="w-full px-4 py-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <Logo/>
        <Navbar/>
        <SocialMediaLinks/>
      </div>
    </header>
  );
};
