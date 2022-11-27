import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head"
import NavBar from "../components/common/NavBar"

const Tienda = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Sweet Party - Tienda</title>
                <meta name="description" content="Tienda de Sweet Party"></meta>
            </Head>
            <NavBar></NavBar>
        </div>
    )
}

export default Tienda