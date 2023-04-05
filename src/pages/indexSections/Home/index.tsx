import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import Link from "next/link";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";

type SocialLinkProps = {
    href: string;
    icon: IconName;
};

export default function HomeSection() {
    function SocialLink({ href, icon }: SocialLinkProps) {
        return (
            <Link href={href} className={styles.socialLink}>
                <FontAwesomeIcon icon={["fab", icon]} />
            </Link>
        );
    }

    return (
        <div className={styles.homeSection}>
            <div className={styles.left}>
                <h1 className={styles.title}>Logan Waite</h1>
                <h3 className={styles.subtitle}>Front End Web Developer</h3>
                <p className={styles.blurb}>
                    I'm a software engineer who enjoys building things that
                    people enjoy using. Clean, beautiful user interfaces built
                    with efficient, readable code is the ideal I strive for.
                </p>
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
                <a
                    href="/files/resume.pdf"
                    download="Logan Waite - Resume 2023"
                    target="_blank"
                >
                    <button type="button" className={styles.downloadButton}>
                        Download Resume
                    </button>
                </a>
            </div>
            <div className={styles.right}>
                <svg className={styles.clipPath}></svg>
                <div className={styles.headshot}>
                    <div className={styles.background}>
                        <svg id="circle">
                            <defs>
                                <clipPath id="headshotMask">
                                    <rect width="400" height="100"></rect>
                                    <circle cx="200" cy="250" r="200"></circle>
                                </clipPath>
                            </defs>
                            <circle cx="200" cy="200" r="200"></circle>
                        </svg>
                    </div>
                    <div className={styles.foreground}>
                        <Image
                            src="/images/headshot.png"
                            alt="Photo of Logan Waite"
                            width="400"
                            height="659"
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}
