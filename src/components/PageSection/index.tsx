import {
    ButtonHTMLAttributes,
    PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useRef,
} from "react";
import styles from "./styles.module.css";
import NavContext from "@/lib/contexts/NavContext";

export default function PageSection({
    children,
    id,
    ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { dispatch } = useContext(NavContext);
    const navDispatch = useCallback((arg: any) => dispatch(arg), [dispatch]);

    useEffect(() => {
        if (sectionRef) {
            navDispatch({
                type: "ADD_SECTION_OFFSET",
                payload: { id, offset: sectionRef.current?.offsetTop },
            });
        }
    }, [sectionRef, navDispatch, id]);

    return (
        <section
            ref={sectionRef}
            className={styles.pageSection}
            id={id}
            {...props}
        >
            {children}
        </section>
    );
}
