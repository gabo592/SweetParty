import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/common/NavBar';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sweet Party</title>
        <meta name="description" content="Página principal de Sweet Party"></meta>
      </Head>
      <NavBar></NavBar>
    </div>
  )
}
