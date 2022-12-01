import NavBar from '../components/common/NavBar'
import Titulo from '../components/common/Titulo'
import Layout from '../components/common/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sweet Party</title>
        <meta name="description" content="Página principal de Sweet Party"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Layout>
        <Titulo>Bienvenido</Titulo>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi odit saepe delectus nesciunt quibusdam beatae ab, earum molestiae optio! Voluptatibus fugit, optio sapiente placeat ratione quam et accusamus architecto aperiam.</p>
      </Layout>
    </div>
  )
}
