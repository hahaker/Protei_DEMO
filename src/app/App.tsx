import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { StatsSection } from './components/StatsSection';
import { ProgramTabs } from './components/ProgramTabs';
import { RoundTableSection } from './components/RoundTableSection';
import { LectoriumSection } from './components/LectoriumSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PartnersSection } from './components/PartnersSection';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { BackgroundGraphics } from './components/BackgroundGraphics';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingElements } from './components/FloatingElements';
import { AnimatedParticles } from './components/AnimatedParticles';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#000C14] overflow-hidden font-['Montserrat',sans-serif]">
      <ScrollProgress />
      <AnimatedParticles />
      <FloatingElements />
      <BackgroundGraphics />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <StatsSection />
          <ProgramTabs />
          <RoundTableSection />
          <LectoriumSection />
          <TestimonialsSection />
          <PartnersSection />
          <RegistrationForm />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}