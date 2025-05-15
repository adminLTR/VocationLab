import styled from "styled-components";
import UsersRecomendations from "./components/UsersRecomendations";

const Title = styled.h1`
  font-size: 128px;
  font-family: "Medula One", system-ui;
  margin-top: 2rem;
  line-height: 80%;
`;

export default function Home() {
    return <div className="home-page">
        <Title>
            <span>Transformamos la</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-500 to-secondary-600">
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
                avatars={['logo_header.png', 'logo_header.png', 'logo_header.png']}            
            />
        </div>
    </div>
}