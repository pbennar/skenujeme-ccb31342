import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProcessSection from "@/components/ProcessSection";
import ScanTypesSection from "@/components/ScanTypesSection";
import UsagesSection from "@/components/UsagesSection";
import BenefitsSection from "@/components/BenefitsSection";
import OutputsSection from "@/components/OutputsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <IntroSection />
      <ProcessSection />
      <ScanTypesSection />
      <UsagesSection />
      <BenefitsSection />
      <OutputsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
