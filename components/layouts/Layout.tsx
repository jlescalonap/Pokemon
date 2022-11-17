import { FC, PropsWithChildren } from "react";

import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
    title?: string;
}

//Retrieve path de la pagina
const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App'}</title>
                <meta name="author" content="Jose Escalona" />
                <meta name="description" content={`Información sobre el Pokemon ${ title }`} />
                <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
                <meta property="og:title" content={`Información sobre ${ title }`} />
                <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
                <meta property="og:image" content={`${ origin }/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        </>
    )
};