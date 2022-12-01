import style from "../../styles/NavBar.module.css"
import Logo from "./Logo"
import Link from "next/link"

const NavBar = (): JSX.Element => {
    return (
        <nav className={style.nav}>
            <Logo></Logo>
            <Link href={"/"} className={style.link}>Home</Link>
            <Link href={"/shop"} className={style.link}>Shop</Link>
            <Link href={"/about"} className={style.link}>About</Link>
            <Link href={"/login"} className={style.link}>Iniciar Sesión</Link>
        </nav>
    )
}

export default NavBar