import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export default function Home() {
  return <><a className="skip-link" href="#main">Lewati navigasi</a><Navbar /><main id="main"><HeroSection /><ProjectShowcase /><AboutSection /><ExperienceTimeline /><ContactSection /></main><Footer /></>;
}
