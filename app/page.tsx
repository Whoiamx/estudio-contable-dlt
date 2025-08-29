import { AboutPage } from "./components/AboutPage";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { HeaderSection } from "./components/HeaderSection";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { StatsSection } from "./components/StatsSection";
import { WhatsAppFloat } from "./components/WhatsappAppFloat";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <ServicesSection />
      <AboutPage />
      <StatsSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
}
