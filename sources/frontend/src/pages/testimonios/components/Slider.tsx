import { useEffect, useState } from "react"

interface CardProps {
    profilePhotoUrl: string,
    name: string,
    username: string,
    comment: string,
}
function Card({ profilePhotoUrl, name, username, comment }: CardProps) {
  return (
    <div className="rounded-3xl font-inter text-black max-w-[326px] p-4 bg-gradient-to-tr bg-red-50">
      <img src={profilePhotoUrl} alt="Usuario" className="block m-auto mb-2" width={50} />
      <div className="text-center">
        <p className="font-bold text-[18px]">{name}</p>
        <p className="text-[10px]">{username}</p>
        <p className="text-[13px] my-4">{comment}</p>
        <p className="text-[30px] text-[#BDCFE2]">
          <i className="fa-solid fa-quote-left"></i>
        </p>
      </div>
    </div>
  );
}

interface SliderProps {
    data: CardProps[]
}
export default function Slider({data} : SliderProps) {
    const [firstData, setFirstData] = useState<CardProps[]>([]);
    const [secondData, setSecondData] = useState<CardProps[]>([]);

    useEffect(() => {
      const half = Math.ceil(data.length / 2);
      setFirstData(data.slice(0, half));
      setSecondData(data.slice(half));
    }, [data])

    return <div className="flex gap-4 justify-center flex-nowrap items-center over overflow-hidden bg-red-500">
        {firstData.map((user)=><Card 
          username={user.username}
          profilePhotoUrl={user.profilePhotoUrl}
          name={user.name}
          comment={user.comment}
        />)}
    </div>
}