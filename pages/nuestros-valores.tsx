import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head"
import NavBar from "../components/common/NavBar"

const NuestrosValores = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Sweet Party - Nuestros Valores</title>
                <meta name="description" content="Valores de Sweet Party"></meta>
            </Head>
            <NavBar></NavBar>
        </div>
    )
}

export default NuestrosValores