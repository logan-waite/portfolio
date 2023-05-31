import React, { ReactNode, useContext } from "react";
import Link, { LinkProps } from "next/link";
import { joinClassNames } from "@/lib/utils";
import styles from "./styles.module.css";
import NavContext from "@/lib/contexts/NavContext";

type NavLinkProps = LinkProps & { children: ReactNode };

export default function NavLink({ href, children, ...props }: NavLinkProps) {
    const { activeLink } = useContext(NavContext);
    const isActive = activeLink === href.toString().substring(2);
    return (
        <Link
            className={joinClassNames(
                styles.navLink,
                isActive ? styles.active : ""
            )}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
}
