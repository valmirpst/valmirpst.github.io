import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SiteHeader from "@/components/SiteHeader";
import StackSection from "@/components/StackSection";

const Index = () => (
  <>
    <SiteHeader />
    <main id="conteudo">
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  </>
);

export default Index;
