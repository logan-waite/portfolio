import Navbar from "@/components/Navbar";
import { ReactNode, useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Footer from "@/components/Footer";
import NavContext from "@/lib/contexts/NavContext";
import { useRouter } from "next/router";

export default function MainLayout({ children }: { children: ReactNode }) {
    const { offsets, dispatch } = useContext(NavContext);
    const router = useRouter();

    useEffect(() => {
        const id =
            router.asPath.length > 1 ? router.asPath.substring(2) : "home";
        dispatch({ type: "UPDATE_ACTIVE_LINK", payload: id });
    }, []);

    useEffect(() => {
        function handleScroll() {
            if (offsets) {
                const [newId] = offsets.reduce(
                    (closestOffset, [id, offset]) => {
                        const [_, closestDiff] = closestOffset;
                        const offsetDiff = Math.abs(window.scrollY - offset);
                        if (offsetDiff < closestDiff) {
                            return [id, offsetDiff];
                        }
                        return closestOffset;
                    },
                    ["home", Infinity]
                );
                dispatch({ type: "UPDATE_ACTIVE_LINK", payload: newId });
            }
        }

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [offsets, dispatch]);
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.mainLayout}>{children}</main>
            <Footer />
        </>
    );
}
