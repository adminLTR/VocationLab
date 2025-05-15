
interface UsersRecomendationsProps {
    usuarios: number;
    recomiendan: number;
    avatars: string[]; // URLs de las imágenes
}

export default function UsersRecomendations({ usuarios, recomiendan, avatars } :UsersRecomendationsProps ) {
  return (
    <div className="flex items-center rounded-full border border-gray-300 overflow-hidden text-sm divide-x divide-gray-300 bg-white">
      <div className="px-4 py-2">
        <span className="font-medium text-gray-700">+{usuarios} <br /> usuarios</span>
      </div>
      <div className="px-4 py-2">
        <span className="font-medium text-gray-700">+{recomiendan} <br /> recomiendan</span>
      </div>
      <div className="px-4 py-2 flex items-center space-x-[-8px] pl-4">
        {avatars.slice(0, 3).map((avatar, index) => (
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