import Head from "next/head"
import NavBar from "../components/common/NavBar"

const About = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Sweet Party - Acerca de Nosotros</title>
                <meta name="description" content="Acerca de nosotros - Sweet Party"></meta>
            </Head>
            <NavBar></NavBar>
        </div>
    )
}

export default About