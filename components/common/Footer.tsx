import style from "../../styles/Footer.module.css"
import Logo from "../../public/assets/images/logo.png"
import Parrafo from "./Parrafo"
import SubTitulo from "./SubTitulo"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return(
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.imageContainer}>
                    <Image src={Logo} alt="Logo" className={style.image}></Image>
                </div>
            </div>
            <div className={style.container}>
                <SubTitulo>Otros Enlaces</SubTitulo>
                <Link href={"/"} className={style.links}>Inicio</Link>
                <Link href={"/shop"} className={style.links}>Tienda</Link>
                <Link href={"/about"} className={style.links}>Acerca de</Link>
            </div>
            <div className={style.container}>
                <SubTitulo>Redes Sociales</SubTitulo>
                <div className={style.socialMedia}>
                    <a href="https://www.facebook.com/OnlySweetParty" className={style.enlaces}>
                        <i className= "fi fi-brands-facebook"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=%2B50582213532&data=AWB0L3vax5DaP_2ZRv6J4lkk7Gc0lnr3o2IcHsoiQ2N3eH0kQw5NnsUSJeW4bBeNz7m4PRuD120vzloVgXLCe7ZFHI-ru-Ryu_xKoxlhORzY0zQSkodKCtdfVzcdEgBHuj2RfNSauIeR1VFxE8uEcq8uOAj_sUrz9gYLIfbMeKt53l-p11-cfzRHXI9yXiF2t0C3y1-z3_S6sCI0WdDM_drVPcPL58cxbRRvQBndYu4gu9ugsmdsTmuv-Cn1VJWxj9L1sQMQbkQ5K5S4SRzI1r9A2Ztleb3ybNWAoxM4J-3J4wS-ZbVzp0YzDmIjq9rhO0I&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0qnFkZXPjlfIv5FoeqImMSRxbpGODJnv8JB0ePh39OUAmiZyzzGKf5sPg" className={style.enlaces}>
                        <i className="fi fi-brands-whatsapp"></i>					
                    </a>
                    <a href="https://www.instagram.com/gaby_nic1/" className={style.enlaces}>
                        <i className="fi fi-brands-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer