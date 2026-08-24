import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BentoGridSkills from "@/components/BentoGridSkills";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SpotlightGlow from "@/components/SpotlightGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090809] text-zinc-100 flex flex-col font-sans selection:bg-red-500/25 selection:text-red-200">
      {/* Interactive Cursor Ambient Glow */}
      <SpotlightGlow />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <AboutSection />
        <BentoGridSkills />
        <ProjectShowcase />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
