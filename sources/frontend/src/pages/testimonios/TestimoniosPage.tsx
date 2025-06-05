import Title from "../../components/Title"
import Slider from "./components/Slider"

export default function TestimoniosPage() {
    
    return <div>
        <div className="w-fit m-auto">
            <Title>
                <p className="text-center mb-3 text-[60px] w-full">
                    <span>Nuestros</span> 
                    &nbsp;
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-500 to-secondary-600">
                         usuarios
                    </span>
                    &nbsp;
                    <span>opinan</span>
                </p>
            </Title>
        </div>
        <p className="text-center mb-8">
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
}