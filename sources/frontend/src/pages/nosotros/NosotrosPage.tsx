import Title from "../../components/Title";
import Card from "./components/Card";

export default function NosotrosPage() {
    const data = [
        {
            profilePhotoUrl:"/yo_mejorado.png",
            name:"Hugo Alvarez",
            position:"Word Senior"
        },
        {
            profilePhotoUrl:"/yo_mejorado.png",
            name:"Ever Avedaño",
            position:"Figma Senior"
        },
        {
            profilePhotoUrl:"/yo_mejorado.png",
            name:"Luis La Torre",
            position:"JS Senior"
        },
        {
            profilePhotoUrl:"/yo_mejorado.png",
            name:"Bruno Chochoca",
            position:"Word Senior"
        },
        {
            profilePhotoUrl:"/yo_mejorado.png",
            name:"Giacomo Madrid",
            position:"Word Senior"
        },
        {
            profilePhotoUrl:"/yo_mejorado.png",
            name:"Laura Mendoza",
            position:"Word Senior"
        },
    ]
    return <div>
        <div className="text-center">
            <div className="w-fit m-auto py-2">
                <Title>
                    <span className="text-[60px]">Nuestro </span>
                    <span className="text-transparent text-[60px] bg-clip-text bg-gradient-to-r from-main-500 to-secondary-600">
                        equipo
                    </span>
                </Title>
            </div>
            <p className="text-[#BDCFE2] text-[40px] font-medula mt-1 mb-4">Apasionados. Creativos. Alcohólicos.</p>
            <div className="flex gap-10 justify-center flex-wrap">
                {data.map((usuario, index) => {
                    return <Card 
                        {...usuario}
                        key={index}
                    />
                })}
            </div>
            <div className="font-inter font-medium text-[18px] text-[#92A1B0]">
                <p>VocationLab nació al reflexionar sobre el proceso de preparación preuniversitaria que siguió cada integrante de nuestro equipo. Nos dimos cuenta que al escoger una carrera universitaria, no se cuenta con una herramienta que cuente con la efectividad del servicio de un profesional en guía vocacional, en un entorno digital y de forma gratuita. </p>
                <p>Este proyecto es de código abierto, por lo que contamos con las sugerencias provenientes de la comunidad académica para brindar una mayor efectividad en nuestro test.</p>
            </div>
        </div>
    </div>
}