import UsersRecomendations from "./components/UsersRecomendations";

export default function HomePage() {

    return <div className="home-page h-full">
        <div className="py-20 w-full md:w-10/12 mx-auto flex flex-col h-full">
            {/* <div className="fullscreen-background"></div> */}
            <h1 className="font-sf font-semibold leading-[0.8] w-fit md:m-0 m-auto text-center md:text-start
            text-[40px] md:text-[60px] lg:text-[80px]">
                <span className="">Transformamos la</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A629FF] to-[#1DD1CB]">
                    orientación vocacional
                </span>
            </h1>
            <p className="font-inter my-4 lg:my-10 text-[14px] lg:text-[24px] text-[#5D5D5D] text-center md:text-start">
                Prueba nuestro test interactivo, diseñado para <br /> conocerte de verdad sin tener que aburrirte.
            </p>
            <div className="flex space-x-2 justify-center md:justify-start">
                <button 
                    className="px-8 py-3 text-[14px] lg:text-[20px] font-bold cursor-pointer flex items-center gap-2 font-inter rounded-full text-white bg-gradient-to-r opacity-[.72] hover:opacity-100 from-main-400 to-main-300 transition">
                    <i className="fa-solid fa-rocket" style={{fontSize: '18px'}}></i>
                    Iniciar test
                </button>
                <button
                className="px-8 py-3 cursor-pointer text-[14px] lg:text-[20px] flex items-center font-bold gap-2 font-inter rounded-full bg-white text-main-600 hover:bg-main-50 transition">
                    <i className="fa-solid fa-paper-plane"></i>
                    Ver demo
                </button>
            </div>
            <div className="grow flex justify-center md:justify-start items-end">
                <UsersRecomendations 
                    usuarios={400} 
                    recomiendan={290} 
                    avatars={['user1.png', 'user2.png', 'user3.png']}            
                />
            </div>
        </div>
    </div>
}