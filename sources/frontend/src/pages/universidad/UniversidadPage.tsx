import Card from "./components/Card"

export default function UniversidadPage() {
    const careers = [
        {
            imageUrl: '/ever.png',
            name: 'UNMSM',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            imageUrl: '/ever.png',
            name: 'Ingeniería Nacional de Ingeniería',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            imageUrl: '/ever.png',
            name: 'Universidad Tecnológica del Perú',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            imageUrl: '/ever.png',
            name: 'Universidad de Ingeniería y Tecnología',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            imageUrl: '/ever.png',
            name: 'Universidad Peruana de Ciencias Aplicadas',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
            imageUrl: '/ever.png',
            name: 'Ingeniería del Callao',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
    ]
    return <div className="h-full overflow-scroll no-scrollbar">
        <div className="py-10 text-center">
            <h2 className="font-sf font-semibold leading-[0.8] md:m-0 m-auto
            text-[40px] md:text-[40px] lg:text-[60px]">
                <span className="">Universidades</span>&nbsp;    
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A629FF] to-[#1DD1CB]">
                    profesionales
                </span>
            </h2>
            <p className="py-10">
                Estas son las universidades que ofrecen la carrera de tu vocación.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 text-center flex-wrap">
            {careers.map((career, index) => {
                return <Card key={index} {...career}/>
            })}
        </div>
    </div>
}
