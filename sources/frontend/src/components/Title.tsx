import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode
}
export default function Title({children} : TitleProps) {
    return <h1 className="font-sf font-semibold leading-[0.8] w-fit">
        {children}
    </h1>
}