
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
export default function Card({logo, name, short_name, description} : Institution) {
    return <div className="bg-white rounded-3xl p-5 hover:-rotate-z-12 transition-all hover:shadow-[0_0_10px_5px_#A086FF] hover:shadow-[#A086FF] cursor-pointer">
        <img src={logo} alt={name} className="block rounded-full my-2 mx-auto h-[80px]" />
        <h5 className="text-[18px] font-semibold">{name}</h5>
        <p className="text-[13px] mb-5">
            {short_name}
        </p>
        <p className="text-[13px]">
            {description}
        </p>
    </div>
}
