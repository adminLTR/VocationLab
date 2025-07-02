import Slider from "./components/Slider"
import bgSvg from "../../assets/bg-svg/bg-testimonials.svg"

export default function TestimoniosPage() {
    
    return <div className="relative w-full h-full">
    <img
        src={bgSvg}
        alt="bg"
        className="w-full h-auto absolute top-0 left-0 -z-10"
    />
        <div className="py-10 w-full md:w-10/12 mx-auto flex flex-col h-full">
            <h1 className="font-sf font-semibold leading-[0.8] text-center
            text-[30px] md:text-[40px] lg:text-[60px]">
                <span className="">
                    Nuestros
                </span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A629FF] to-[#1DD1CB]">
                    usuarios
                </span> opinan
            </h1>
            <p className="text-center my-8">
                Nuestra mision es brindar una herramienta efectiva y una experiencia satisfactoria a nuestros usuarios
            </p>
            <Slider
            data={[
                {
                    profilePhotoUrl: "user2.png",
                    name: "Asthri Pardave",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    profilePhotoUrl: "user1.png",
                    name: "Luis La Torre",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    profilePhotoUrl: "user2.png",
                    name: "Asthri Pardave",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    profilePhotoUrl: "user1.png",
                    name: "Luis La Torre",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    profilePhotoUrl: "user2.png",
                    name: "Asthri Pardave",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    profilePhotoUrl: "user1.png",
                    name: "Luis La Torre",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    profilePhotoUrl: "user2.png",
                    name: "Asthri Pardave",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    profilePhotoUrl: "user1.png",
                    name: "Luis La Torre",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    profilePhotoUrl: "user2.png",
                    name: "Asthri Pardave",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    profilePhotoUrl: "user1.png",
                    name: "Luis La Torre",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    profilePhotoUrl: "user2.png",
                    name: "Asthri Pardave",
                    username: "tinyleopard720",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
            ]}/>
        </div>
    </div>
}