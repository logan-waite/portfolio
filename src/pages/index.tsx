import Head from "next/head";
import PageSection from "@/components/PageSection";
import HomeSection from "./indexSections/Home";
import AboutSection from "./indexSections/About";
import SkillsSection from "./indexSections/Skills";
import PortfolioSection from "./indexSections/Portfolio";
import ContactSection from "./indexSections/Contact";

export default function Home() {
    return (
        <>
            <Head>
                <title>Logan Waite | Portfolio</title>
                <meta
                    name="description"
                    content="Logan Waite's Front End Developer Portfolio"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageSection id="home">
                <HomeSection />
            </PageSection>
            <PageSection id="about">
                <AboutSection />
            </PageSection>
            <PageSection id="skills">
                <SkillsSection />
            </PageSection>
            <PageSection id="portfolio">
                <PortfolioSection />
            </PageSection>
            <PageSection id="contact">
                <ContactSection />
            </PageSection>
        </>
    );
}
