import { useLoaderData } from "react-router-dom";
import Card from "./components/Card"
import { institutionsApi } from "../../services/api";
import { useEffect } from "react";

interface Institution {
  id: number;
  name: string;
  short_name?: string;
  description?: string;
  logo: string; // si estás usando solo instituciones con logo
  careers?: Career[];
}

interface Career {
  id: number;
  name: string;
  image?: string;
}
export const loader = async (): Promise<{ institutions: Institution[] }> => {
  const institutions = (await institutionsApi()).data;
  return { institutions };
};
export default function UniversidadPage() {
    const { institutions } = useLoaderData() as { institutions: Institution[] };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 text-center flex-wrap">
            {institutions.map((institution) => {
                return <Card key={institution.id} {...institution}/>
            })}
        </div>
    </div>
}
