import { FC } from "react"
import style from "../../styles/Parrafo.module.css"

interface ParrafoProps {
    children?: string
}

const Parrafo: FC<ParrafoProps> = ({ children }) => {
    return(
        <p className={style.parrafo}>{children}</p>
    )
}

export default Parrafo