import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SiteHeader from "@/components/SiteHeader";

const Index = () => (
  <>
    <SiteHeader />
    <main id="conteudo">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  </>
);

export default Index;
