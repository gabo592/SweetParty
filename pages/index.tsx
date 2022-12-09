import NavBar from '../components/common/NavBar'
import Titulo from '../components/common/Titulo'
import SubTitulo from '../components/common/SubTitulo'
import Parrafo from '../components/common/Parrafo'
import Layout from '../components/common/Layout'
import Footer from '../components/common/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../public/assets/images/banner.jpg"
import style from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sweet Party</title>
        <meta name="description" content="Página principal de Sweet Party"></meta>
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'></link>
      </Head>
      <NavBar></NavBar>
      <Layout>
        <Titulo>Bienvenido a Sweet Party</Titulo>
        <div className={style.imageContainer}>
          <Image src={Banner} alt={"Banner de Sweet Party"} className={style.image}></Image>
        </div>
        <SubTitulo>Resumen</SubTitulo>
        <Parrafo>Sweet Party es un negocio familiar dedicado a la distribución de artículos para fiestas. Contamos con arreglos completamente personalizables, de modo que se ajustan a los gustos de nuestros clientes.</Parrafo>
        <SubTitulo>Dirección</SubTitulo>
        <Parrafo>De los semáforos del Conchita Palacio, 6 cuadras al norte.</Parrafo>
      </Layout>
      <Footer></Footer>
    </div>
  )
}
