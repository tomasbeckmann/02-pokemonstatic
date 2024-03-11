import Head from "next/head"
import { Navbar } from "../ui/Navbar"


export const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title> {title || "Pokemon App"} </title>
                <meta name="author" content="Tomas Beckmann" />
                <meta name="description" content="Informacion sobre el Pokemon X" />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>
            <Navbar />
            <main style={{
                padding: ' 0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
