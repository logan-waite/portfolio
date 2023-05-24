import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import styles from "./styles.module.css";

// type PageSectionProps =

export default function PageSection({
    children,
    ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
    return (
        <section className={styles.pageSection} {...props}>
            {children}
        </section>
    );
}
