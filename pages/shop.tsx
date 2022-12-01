import Head from "next/head"
import NavBar from "../components/common/NavBar"

const Shop = (): JSX.Element => {
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

export default Shop