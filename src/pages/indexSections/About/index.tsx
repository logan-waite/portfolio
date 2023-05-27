import Transporter from "@/components/Transporter";
import styles from "./styles.module.css";
import Image from "next/image";
import {
    SetStateAction,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { createArray, joinClassNames } from "@/lib/utils";
import { useWindowSize } from "@/lib/hooks/useWindowSize";

type ItemSection = {
    icon: IconName;
    text: string;
    active: boolean;
    title: string;
};

const itemSections: ItemSection[] = [
    {
        title: "Career",
        icon: "display-code",
        text: "I have been developing full stack web applications for the last 8 years, with a special focus on the front end. I have built complete front-end applications from scratch, led product design discussions, and provided direction for future software development. With a passion for clean, functional code and exceptional UI design, I do my best to leave my current codebase better than I found it, and improve the user and developer experience for those that come after me.",
        active: true,
    },
    {
        title: "Hobbies",
        icon: "hammer",
        text: "In my downtime, I enjoy spending time with my family, as well as reading, playing games, and woodworking. My favorite genre of fiction is science fiction and fantasy, though I also enjoy reading financial and self-improvement books. Some of my favorite board games include Clank, Century, Thunderstone Quest, and Ticket to Ride. I also recently added a home media center in our basement and remodeled the kitchen in our home.",
        active: false,
    },
    {
        title: "Travel",
        icon: "plane-departure",
        text: "I enjoy traveling, and have been to many different parts of the world. I spent two years in central Africa serving a mission for my church, which sparked the desire to travel. Since then, I've spent almost three months traveling around Europe and Mexico with my wife, and also embarked on a cross-country trip across the US. We eventually ended up settling down in North Carolina.",
        active: false,
    },
    {
        title: "Family",
        icon: "family",
        text: "I married my wife in 2015, and now have a daughter that is two and a half years old, and a son that is less than a year. Originally from Utah, we settled in North Carolina to be closer to family.",
        active: false,
    },
    {
        title: "Tech Stack",
        icon: "gear-complex-code",
        text: "Over the course of my career, I've worked in a variety of languages and frameworks. I am proficient in Javascript, with Vue being my framework of choice. I also enjoy working in React and Svelte. My backend languages include PHP and Python, and I am currently in the process of learning Rust.",
        active: false,
    },
];

function findVisibleIndexes(length: number, i: number) {
    const upper = i === length - 1 ? 0 : i + 1;
    const lower = i <= 0 ? length - 1 : i - 1;
    return [upper, lower, i];
}

function findIndexPositions(currentIndex: number, length: number) {
    let position = -Math.floor(length / 2);
    return createArray(length, (_, i) => i).reduce((orderedIndexes, index) => {
        let newIndex = currentIndex + position;

        if (newIndex < 0) {
            newIndex += length;
        } else if (newIndex >= length) {
            newIndex -= length;
        }

        orderedIndexes.push(newIndex);
        position += 1;
        return orderedIndexes;
    }, [] as number[]);
}

type SideIconProps = {
    onClick: () => void;
    icon: IconName;
    active: boolean;
    style: {};
};

function SideIcon({ onClick, icon, active, ...props }: SideIconProps) {
    const activeClass = active ? styles.activeIcon : "null";
    return (
        <FontAwesomeIcon
            className={joinClassNames(styles.icon, activeClass)}
            icon={["fas", icon]}
            onClick={onClick}
            {...props}
        />
    );
}

type AboutMeIconSelectorProps = {
    updateItems: (index: number) => void;
    items: ItemSection[];
    isMobile: boolean;
};

type CSSStylesWithVars = React.CSSProperties &
    Record<`--${string}`, number | string>;

function AboutMeIconSelector({
    updateItems,
    items,
    isMobile,
}: AboutMeIconSelectorProps) {
    const currentActiveIndex = items.findIndex((b) => b.active);
    const [rotation, setRotation] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleIndexes, setVisibleIndexes] = useState(
        findVisibleIndexes(items.length, currentActiveIndex)
    );
    const radius = 150;
    const containerSize = 300;
    const step = (2 * Math.PI) / items.length;

    function handleClick(i: number) {
        if (!isMobile) {
            if (i === items.length - 1 && currentIndex === 0) {
                setRotation(rotation - step);
            } else if (i === 0 && currentIndex === items.length - 1) {
                setRotation(rotation + step);
            } else if (i > currentIndex) {
                setRotation(rotation + step);
            } else if (i < currentIndex) {
                setRotation(rotation - step);
            }
        }
        setCurrentIndex(i);
        updateItems(i);
        setVisibleIndexes(findVisibleIndexes(items.length, i));
    }

    let selectionIcons;
    if (isMobile) {
        const positions = findIndexPositions(currentIndex, items.length);
        selectionIcons = items.map((section, i) => {
            let toLeft, toRight;
            if (
                positions.findIndex((p) => p === i) <
                Math.floor(items.length / 2)
            ) {
                toLeft = true;
            } else if (
                positions.findIndex((p) => p === i) >
                Math.floor(items.length / 2)
            ) {
                toRight = true;
            }

            const isVisible = visibleIndexes.includes(i);
            const height = section.active ? 80 : isVisible ? 40 : 10;
            const top = section.active ? 0 : isVisible ? 20 : 40;
            const left =
                currentIndex === i
                    ? containerSize / 2 - 40
                    : isVisible && toLeft
                    ? 0
                    : isVisible && toRight
                    ? containerSize - 50
                    : toLeft
                    ? -(containerSize / 2)
                    : containerSize + containerSize / 2;
            // console.log({ left });
            return (
                <SideIcon
                    key={i}
                    onClick={() => handleClick(i)}
                    icon={section.icon}
                    active={section.active}
                    style={{
                        top: top + "px",
                        left: left + "px",
                        height: height + "px",
                    }}
                />
            );
        });
    } else {
        selectionIcons = items.map((section, i) => {
            const angle = step * i;
            const isVisible = visibleIndexes.includes(i);
            const height = section.active ? 100 : isVisible ? 40 : 1;
            const left = Math.round(
                containerSize / 2 + radius * Math.cos(angle) - height / 2
            );
            const top = Math.round(
                containerSize / 2 + radius * Math.sin(angle) - height / 2
            );
            return (
                <SideIcon
                    key={i}
                    onClick={() => handleClick(i)}
                    icon={section.icon}
                    active={section.active}
                    style={{
                        top: top + "px",
                        left: left + "px",
                        transform: `rotate(${rotation}rad)`,
                        height: height + "px",
                    }}
                />
            );
        });
    }

    return (
        <div
            className={styles.iconContainer}
            style={{
                width: containerSize + "px",
                height: (isMobile ? 100 : containerSize) + "px",
                transform: `rotate(${-rotation}rad)`,
            }}
        >
            {selectionIcons}
        </div>
    );
}

export default function AboutSection() {
    const windowSize = useWindowSize();
    const [items, setItems] = useState(itemSections);
    const [height, setHeight] = useState(0);
    const [itemText, setItemText] = useState<string | undefined>("");
    const [opacity, setOpacity] = useState(0);
    const itemTextRef = useRef<HTMLParagraphElement>(null);
    const animationTiming = 0.75;

    const isMobile = (windowSize.width ?? 0) < 768;

    function updateItems(index: number) {
        const updatedItems = items.map((item, i) => ({
            ...item,
            active: i === index,
        }));
        setItems(updatedItems);
    }

    const activeItem = items.find((b) => b.active);
    useEffect(() => {
        setHeight(itemTextRef.current?.clientHeight ?? 0);
    }, []);

    useEffect(() => {
        setHeight(itemTextRef.current?.clientHeight ?? 0);
        setOpacity(0);
        setTimeout(() => {
            setItemText(activeItem?.text);
            setOpacity(1);
        }, animationTiming * 500);
    }, [activeItem]);

    return (
        <div
            className={styles.aboutSection}
            style={
                {
                    "--animation-timing": `${animationTiming}s`,
                } as CSSStylesWithVars
            }
        >
            <div className={styles.left}>
                <AboutMeIconSelector
                    isMobile={isMobile}
                    updateItems={updateItems}
                    items={items}
                />
            </div>
            <div className={styles.right}>
                <h1 className={styles.itemTitle}>{activeItem?.title}</h1>
                <div className={styles.itemTextContainer}>
                    <div
                        style={{ height: height }}
                        className={styles.borderContainer}
                    >
                        <p style={{ opacity }} className={styles.itemText}>
                            {itemText}
                        </p>
                        <p
                            ref={itemTextRef}
                            className={styles.itemTextReference}
                        >
                            {activeItem?.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
