// src/app/page.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ClientsSection from '@/components/SkillsSection';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SertifSection from '@/components/SertifSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Loading from '@/components/Loading';

export default function Home() {
  return (
    <>
      <Loading />
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ClientsSection />
      {/* <SertifSection /> */}
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  );
}