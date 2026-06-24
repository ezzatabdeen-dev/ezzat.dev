import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LuPhoneCall } from "react-icons/lu";

interface HeaderProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Objectives", href: "#objectives" },
];

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const drawerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll();

  // Optimally track scroll behaviors without forcing heavy React re-renders
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest * 100);
  });

  // Close mobile drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Smooth scroll handler for mobile menu items
  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Timeout ensures drawer closing animation doesn't stutter alongside window scroll
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbarOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: elementPosition - navbarOffset,
          behavior: "smooth",
        });

        window.history.pushState(null, "", href);
      }
    }, 150);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-900 z-50 overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-emerald-400 origin-left"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header */}
      <header
        id="navbar-header"
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 custom-container ${
          isScrolled
            ? "py-3 bg-slate-950/75 backdrop-blur-md border-b border-slate-900/50 shadow-lg shadow-slate-950/20"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo area */}
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-800 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/35 transition-all duration-300">
                <span className="logoIconText font-display font-bold text-white">EA</span>
              </div>
              <div className="flex flex-col">
                <span className="logoName font-extrabold text-white tracking-wider text-base block">
                  EZZAT A. AHMED
                </span>
                <span className="logoInfo text-indigo-400 font-semibold tracking-widest uppercase block">
                  MIS Specialist
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden min-[920px]:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                      isActive
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-slate-300 hover:text-white hover:bg-slate-900/40"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute inset-0 border border-blue-500/30 rounded-full pointer-events-none"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Top CTA Button */}
            <div className="hidden min-[920px]:flex items-center">
              <a
                id="btn-nav-contact"
                href="#contact"
                className="group relative overflow-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white text-xs md:text-sm font-semibold tracking-wide shadow-[0_4px_14px_rgba(14,165,233,0.3)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.45)] hover:scale-[0.98] active:scale-[0.96] transition-all duration-300"
              >
                {/* Shine Effect */}
                <div className="absolute top-0 left-[-120%] h-full w-[60px] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-[140%] transition-all duration-700" />

                {/* Icon Container */}
                <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/10 backdrop-blur-md transition-transform duration-300 group-hover:rotate-[12deg]">
                  <LuPhoneCall className="w-3 h-3 text-white" />
                </span>

                <span className="relative z-10 pr-1">Contact Us</span>
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="min-[920px]:hidden flex items-center z-50">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/50 transition-colors duration-200 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={drawerRef}
            id="mobile-drawer"
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className={`fixed left-0 right-0 z-50 min-[920px]:hidden px-4 ${isScrolled ? "top-[67px]" : "top-[83px]"}`}>
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.65)] overflow-hidden">
              <div className="p-4 space-y-2">
                {[...NAV_ITEMS, { label: "Contact Us", href: "#contact" }].map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleMobileNavClick(e, item.href)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                          : "text-slate-300 hover:text-white hover:bg-slate-900/80"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}