import AboutSection from "@/pages/indexSections/About";
import ContactSection from "@/pages/indexSections/Contact";
import HomeSection from "@/pages/indexSections/Home";
import PortfolioSection from "@/pages/indexSections/Portfolio";
import SkillsSection from "@/pages/indexSections/Skills";

type Page = {
    id: string;
    component: React.ReactNode;
};

const pageList: Page[] = [
    {
        id: "home",
        component: <HomeSection />,
    },
    {
        id: "about",
        component: <AboutSection />,
    },
    // {
    //     id: "skills",
    //     component: <SkillsSection />,
    // },
    // {
    //     id: "portfolio",
    //     component: <PortfolioSection />,
    // },
    // {
    //     id: "contact",
    //     component: <ContactSection />,
    // },
];

export default pageList;
