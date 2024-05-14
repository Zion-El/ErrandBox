import { ReactNode, FC } from "react"

interface containerProps{
    children: ReactNode
}


export const Container: FC<containerProps> = ({children}) => (
    <section className="px-[2rem] md:px-[2.5rem] lg:px-[5rem] w-full relative">{children}</section>
)