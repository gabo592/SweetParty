import Image from "next/image"
import logo from "../../public/assets/images/logo.png"
import style from "../../styles/Logo.module.css"

const Logo = () => {
    return (
        <div className={style.container}>
            <Image src={logo} alt={"Logo de Sweet Party"} className={style.logo}></Image>
        </div>
    )
}

export default Logo