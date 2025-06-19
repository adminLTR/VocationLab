import CommentBox from "./components/CommentBox"

export default function HomePage() {

    return <div className="h-full flex items-center justify-center">
        <div className="w-fit">
            <div className="text-center">
                <h2 className="text-[60px] mb-3 font-bold">¿Empezamos con el test?</h2>
                <p className="mb-10">Descubre tu verdadera vocación en una conversación con IvAn</p>
            </div>
            <CommentBox/>
        </div>
    </div>
}