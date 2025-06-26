
interface CardProps {
    imageUrl: string,
    name: string,
    shortDescription: string,
}
export default function Card({imageUrl, name, shortDescription} : CardProps) {
    return <div className="bg-white rounded-3xl p-5">
        <img src={imageUrl} alt={name} className="block rounded-full my-2 mx-auto" />
        <h5 className="text-[18px] font-semibold mb-5">{name}</h5>
        <p className="text-[13px]">
            {shortDescription}
        </p>
    </div>
}