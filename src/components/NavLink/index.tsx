import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { joinClassNames } from "@/lib/utils";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

type NavLinkProps = LinkProps & { children: ReactNode };

export default function NavLink({ href, children, ...props }: NavLinkProps) {
    const router = useRouter();
    const isActive =
        router.asPath === href || (router.asPath === "/" && href === "/#home");
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
