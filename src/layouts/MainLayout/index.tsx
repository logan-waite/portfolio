import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import styles from "./styles.module.css";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.mainLayout}>{children}</main>
            <Footer />
        </>
    );
}
