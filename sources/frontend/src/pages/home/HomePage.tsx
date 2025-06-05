import UsersRecomendations from "./components/UsersRecomendations";
import Title from "../../components/Title";

export default function HomePage() {

    return <div className="home-page my-20">
        <div className="fullscreen-background"></div>
        <Title>
            <span className="text-[128px]">Transformamos la</span><br />
            <span className="text-transparent text-[128px] bg-clip-text bg-gradient-to-r from-main-500 to-secondary-600">
                orientación vocacional
            </span>
        </Title>
        <p className="font-inter my-10" style={{fontSize: '24px', color: '#5D5D5D'}}>
            Prueba nuestro test interactivo, diseñado para <br /> conocerte de verdad sin tener que aburrirte.
        </p>
        <div className="flex space-x-2">
            <button style={{fontSize: '20px'}} 
                className="px-8 py-3 font-bold cursor-pointer flex items-center gap-2 font-inter rounded-full text-white bg-gradient-to-r opacity-[.72] hover:opacity-100 from-main-400 to-main-300 transition">
                <i className="fa-solid fa-rocket" style={{fontSize: '18px'}}></i>
                Iniciar test
            </button>
            <button style={{fontSize: '20px'}} 
            className="px-8 py-3 cursor-pointer flex items-center font-bold gap-2 font-inter rounded-full bg-white text-main-600 hover:bg-main-50 transition">
                <i className="fa-solid fa-paper-plane"></i>
                Ver demo
            </button>
        </div>
        <div className="my-20">
            <UsersRecomendations 
                usuarios={400} 
                recomiendan={290} 
                avatars={['user1.png', 'user2.png', 'user3.png']}            
            />
        </div>
    </div>
}