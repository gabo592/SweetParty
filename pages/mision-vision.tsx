import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head"
import NavBar from "../components/common/NavBar"

const MisionVision = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Sweet Party - Misión y Visión</title>
                <meta name="description" content="Misión y Visión de Sweet Party"></meta>
            </Head>
            <NavBar></NavBar>
        </div>
    )
}

export default MisionVision