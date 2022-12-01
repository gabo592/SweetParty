import { FC } from "react"
import style from "../../styles/Layout.module.css"

interface LayoutProps {
    children: any
}

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
    return(
        <div className={style.layout}>
            <div className={style.contenedor}>
                {children}
            </div>
        </div>
    )
}

export default Layout