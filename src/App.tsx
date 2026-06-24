import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

import Header from "./components/Header";
import FloatingParticles from "./components/FloatingParticles";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import CareerObjectives from "./components/CareerObjectives";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [downloadState, setDownloadState] = useState<
    "idle" | "loading" | "success"
  >("idle");
  const [showTerminal, setShowTerminal] = useState(false);

  // High precision viewport scroll tracking to highlight appropriate section link
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "skills",
      "objectives",
      "contact",
    ];

    const observerOptions = {
      root: null, // observe viewport
      rootMargin: "-35% 0px -40% 0px", // trigger when section covers middle third of the screen
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Back-to-Top visibility controller
  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    setDownloadState("loading");
    setShowTerminal(true);
  };

  const handleTerminalComplete = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Ezzat-Abdeen-CV.pdf";
    link.click();
  
    setDownloadState("success");
  
    setTimeout(() => {
      setShowTerminal(false);
      setDownloadState("idle");
    }, 1200);
  };

  return (
    <div
      id="app-root"
      className="relative min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30 selection:text-white"
    >
      {/* Background Interactive Elements */}
      <FloatingParticles />

      {/* Global Header and Progression Meters */}
      <Header activeSection={activeSection} />

      {/* Core Portfolio Navigation Sections */}
      <main id="portfolio-main-content" className="custom-container">
        {/* Section 1: Hero */}
        <Hero
          handleDownloadCV={handleDownloadCV}
          downloadState={downloadState}
          showTerminal={showTerminal}
          onTerminalComplete={handleTerminalComplete}
        />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Education Timeline */}
        <Education />

        {/* Sections 4, 5, 6: Skills, Soft Skills, and Languages */}
        <Skills />

        {/* Section 7: Career Objectives */}
        <CareerObjectives />

        {/* Section 8: Work Experience Readiness */}
        <Experience />

        {/* Section 9: Direct Contacts */}
        <Contact />
      </main>

      {/* Section 10: Footer */}
      <Footer />

      {/* Navigation Floating Back To Top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            id="back-to-top-floating"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-500/35 border border-blue-500/15 cursor-pointer hover:-translate-y-1 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}