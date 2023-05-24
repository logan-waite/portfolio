import Link from "next/link";
import styles from "./styles.module.css";
import NavLink from "@/components/NavLink";
import pageList from "@/lib/pageList";
import { toTitleCase } from "@/lib/utils";

export default function Navbar() {
    return (
        <div className={styles.navbarWrapper}>
            <nav className={styles.navbar}>
                <div className={styles.brand}>Portfolio</div>
                <div className={styles.links}>
                    {pageList.map((page) => (
                        <NavLink
                            scroll={false}
                            href={`/#${page.id}`}
                            key={page.id}
                        >
                            {toTitleCase(page.id)}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </div>
    );
}
