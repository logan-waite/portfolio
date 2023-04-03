import Link from "next/link";
import styles from "./styles.module.css";
import NavLink from "@/components/NavLink";

export default function Navbar() {
    return (
        <div className={styles.navbarWrapper}>
            <nav className={styles.navbar}>
                <div className={styles.brand}>Portfolio</div>
                <div className={styles.links}>
                    <NavLink scroll={false} href="/#home">
                        Home
                    </NavLink>
                    <NavLink scroll={false} href="/#about">
                        About
                    </NavLink>
                    <NavLink scroll={false} href="/#skills">
                        Skills
                    </NavLink>
                    <NavLink scroll={false} href="/#portfolio">
                        Portfolio
                    </NavLink>
                    <NavLink scroll={false} href="/#contact">
                        Contact
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}
