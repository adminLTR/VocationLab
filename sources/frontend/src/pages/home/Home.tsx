import styled from "styled-components";

const Title = styled.h1`
  font-size: 128px;
  font-family: "Medula One", system-ui;
  color: #2c3e50;
  margin-top: 2rem;
  line-height: 80%;
`;

export default function Home() {
    return <div className="home-page">
        <Title>
            <span>Transformamos la</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-400">
                orientación vocacional
            </span>
        </Title>
        <p className="font-inter my-10" style={{fontSize: '24px', color: '#5D5D5D'}}>
            Prueba nuestro test interactivo, diseñado para <br /> conocerte de verdad sin tener que aburrirte.
        </p>
        <div className="flex space-x-2">
            <button style={{fontSize: '20px'}} 
            className="px-8 py-3 cursor-pointer flex items-center gap-2 font-inter rounded-full text-white bg-gradient-to-r from-purple-800 to-purple-500 transition">
                <i className="fa-solid fa-rocket" style={{fontSize: '18px'}}></i>
                Iniciar test
            </button>
            <button style={{fontSize: '20px'}} 
            className="px-8 py-3 cursor-pointer flex items-center gap-2 font-inter rounded-full bg-white text-purple-800 hover:bg-gray-200 transition">
                <i className="fa-solid fa-paper-plane"></i>
                Ver demo
            </button>
        </div>

    </div>
}