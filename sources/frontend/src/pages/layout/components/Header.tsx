import Logo from "./Logo";
import Navbar from "./Navbar";
import SocialMediaLinks from "./SocialMediaLinks";

interface HeaderProps {
  setShowModal: (x:boolean) => void
}
export default function Header({setShowModal} : HeaderProps) {
   return (
    <header className="w-full px-4 py-14 font-inter">
      <div className="max-w-10/12 mx-auto flex flex-wrap items-start justify-between">
        <Logo/>
        <Navbar/>
        <SocialMediaLinks setShowModal={setShowModal}/>
      </div>
    </header>
  );
};
