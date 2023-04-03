import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
            `}</style>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
}
