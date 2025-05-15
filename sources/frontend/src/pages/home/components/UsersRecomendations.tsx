
interface UsersRecomendationsProps {
    usuarios: number;
    recomiendan: number;
    avatars: string[]; // URLs de las imágenes
}

export default function UsersRecomendations({ usuarios, recomiendan, avatars } :UsersRecomendationsProps ) {
  return (
    <div className="flex items-center py-2 px-4 font-inter text-purple-700 rounded-full w-fit bg-purple-50 overflow-hidden text-sm divide-x divide-purple-300">
      <div className="px-4 py-2"style={{fontSize: "12px"}}>
        <span className="font-bold" style={{fontSize: "20px"}}>+{usuarios}</span> <br /> usuarios
      </div>
      <div className="px-4 py-2"style={{fontSize: "12px"}}>
        <span className="font-bold" style={{fontSize: "20px"}}>+{recomiendan}</span> <br /> recomiendan
      </div>
      <div className="px-4 py-2 flex items-center space-x-[-8px] pl-4">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Usuario ${index + 1}`}
            className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
          />
        ))}
      </div>
    </div>
  );
};