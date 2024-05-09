import { ReactNode, FC } from "react"

interface containerProps{
    children: ReactNode
}


export const Container: FC<containerProps> = ({children}) => (
    <section className="px-[1rem] lg:px-[5rem] w-full">{children}</section>
)