import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import styles from "./styles.module.css";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.mainLayout}>{children}</main>
            <footer>footer</footer>
        </>
    );
}
