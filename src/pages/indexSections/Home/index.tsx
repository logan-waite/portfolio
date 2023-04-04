import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import Link from "next/link";
import {
    IconProp,
    IconPrefix,
    IconDefinition,
    IconName,
} from "@fortawesome/fontawesome-svg-core";

type SocialLinkProps = {
    href: string;
    icon: IconName;
};

export default function HomeSection() {
    function SocialLink({ href, icon }: SocialLinkProps) {
        return (
            <Link href={href} className={styles.socialLink}>
                {/* <span> */}
                <FontAwesomeIcon icon={["fab", icon]} />
                {/* </span> */}
            </Link>
        );
    }

    return (
        <div className={styles.homeSection}>
            <div className={styles.left}>
                <h1 className={styles.title}>Logan Waite</h1>
                <h3 className={styles.subtitle}>Front End Web Developer</h3>
                <div className={styles.socialLinks}>
                    <SocialLink
                        href="https://www.github.com/logan-waite"
                        icon="github"
                    />
                    <SocialLink
                        href="https://www.linkedin.com/logan-j-waite"
                        icon="linkedin-in"
                    />
                    <SocialLink
                        href="https://twitter.com/the_L_Dub"
                        icon="twitter"
                    />
                    <SocialLink
                        href="https://www.instagram.com/waitelogan/"
                        icon="instagram"
                    />
                </div>
                <button type="button" className={styles.downloadButton}>
                    Download Resume
                </button>
            </div>
            <div className={styles.right}></div>
        </div>
    );
}
