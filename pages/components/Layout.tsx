import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
    children: ReactNode
}

export function Layout ({children}:LayoutProps) {
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <title>PokeNext</title>
        </Head>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}