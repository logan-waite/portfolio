import "@/styles/globals.css";
import "@/lib/fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/MainLayout";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

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
