import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  ChevronRight,
  FileText,
  GraduationCap,
  MapPin,
} from "lucide-react";

const ezzatAvatar = "/ezzat_avatar_1781448259632.jpg";

interface HeroProps {
  handleDownloadCV: () => void;
  downloadState: "idle" | "loading" | "success";
  showTerminal: boolean;
  onTerminalComplete: () => void;
}

const TERMINAL_LINES = [
  "fetch --candidate=ezzat-abdeen",
  "validate profile data",
  "generate resume.pdf",
  "initialize download",
  "completed ✓",
];

const ROLES = [
  "IT Support Specialist",
  "Data Entry Specialist",
  "HR Assistant",
];

export default function Hero({
  handleDownloadCV,
  downloadState,
  showTerminal,
  onTerminalComplete,
}: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const [typedLines, setTypedLines] = useState(["", "", "", "", ""]);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedRole((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypedRole(currentRole.slice(0, typedRole.length + 1));
      }, 90);
    }

    if (!isDeleting && typedRole === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    }

    if (isDeleting && typedRole === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  useEffect(() => {
    if (!showTerminal) {
      setTypedLines(["", "", "", "", ""]);
      setActiveStep(0);
      return;
    }

    if (activeStep >= TERMINAL_LINES.length) {
      const triggerComplete = setTimeout(() => {
        onTerminalComplete();
      }, 300);
      return () => clearTimeout(triggerComplete);
    }

    const currentLineText = TERMINAL_LINES[activeStep];
    let currentCharIndex = 0;

    const interval = setInterval(() => {
      currentCharIndex++;
      
      setTypedLines((prev) => {
        const copy = [...prev];
        copy[activeStep] = currentLineText.slice(0, currentCharIndex);
        return copy;
      });

      if (currentCharIndex >= currentLineText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setActiveStep((prev) => prev + 1);
        }, 200);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [showTerminal, activeStep, onTerminalComplete]);

  return (
    <>
      <AnimatePresence>
        {showTerminal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999]"
            />

            {/* Terminal Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="
                fixed
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                z-[1000]
                w-[520px]
                max-w-[92vw]
                rounded-2xl
                overflow-hidden
                border
                border-slate-800
                bg-slate-950
                shadow-[0_0_50px_rgba(59,130,246,0.15)]
              "
            >
              {/* Header */}
              <div className="border-b border-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />

                <span className="ml-2 text-xs text-slate-500 font-mono">
                  resume-system
                </span>
              </div>

              {/* Body */}
              <div className="p-5 font-mono text-sm space-y-3 min-h-[180px]">
                {typedLines.map(
                  (line, index) =>
                    activeStep >= index && (
                      <div
                        key={index}
                        className={`flex items-center ${
                          index === 4 ? "text-emerald-400" : "text-blue-400"
                        }`}
                      >
                        <span className="mr-2 text-blue-500">$</span>

                        <span>{line}</span>

                        {activeStep === index &&
                          line.length < TERMINAL_LINES[index].length && (
                            <span className="ml-1 w-[3px] h-5 bg-blue-400 animate-pulse" />
                          )}
                      </div>
                    ),
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section
        id="home"
        className="relative overflow-hidden bg-[#020617] min-h-screen flex items-center pt-28 pb-20"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Grid */}
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          {/* Glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* STATUS */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                backdrop-blur-xl
                px-5
                py-2.5
                text-emerald-300
                mb-8
              "
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <span className="statusHeroText">Ready to Start Immediately • Open to Relocate</span>
              </motion.div>

              {/* TITLE */}
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="
                  uppercase
                  tracking-[0.25em]
                  text-slate-400
                  text-xs
                  font-mono
                "
                >
                  Welcome to My Portfolio
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="
                  heroShortTitle1
                  font-black
                  leading-tight
                  bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent
                "
                >
                  Ezzat Abdeen
                  <br />
                  <span className="heroShortTitle2 text-white">
                    Abdelrahman Ahmed
                  </span>
                </motion.h1>
              </div>

              {/* TERMINAL */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="
                mt-8
                w-full
                max-w-2xl
                rounded-2xl
                overflow-hidden
                border
                border-slate-800
                bg-slate-950/80
                backdrop-blur-xl
              "
              >
                {/* HEADER */}
                <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />

                  <span className="ml-3 text-xs text-slate-500 font-mono">
                    ezzat@seeking:~
                  </span>
                </div>

                {/* CONTENT */}
                <div className="px-5 py-6 font-mono text-left">
                  <div className="flex items-center text-lg">
                    <span className="text-blue-400 mr-2">$</span>

                    <span className="text-slate-200">{typedRole}</span>

                    <span className="ml-1 w-[3px] h-5 bg-blue-400 animate-pulse" />
                  </div>
                </div>
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="
                mt-8
                text-slate-300
                leading-relaxed
                max-w-2xl
                text-sm
                sm:text-base
              "
              >
                An MIS graduate bridging the intersection of robust IT
                Operations, Structured Database Entry, Human Resources
                assistance, and Business Administration workflows. Committed to
                continuous technical growth and organizational excellence.
              </motion.p>

              {/* Hero BUTTON */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadCV}
                  disabled={downloadState === "loading"}
                  className="group relative overflow-hidden
                  inline-flex items-center gap-3
                  px-5 py-3
                  rounded-xl
                  border border-cyan-400/20
                  bg-gradient-to-b from-white/[0.07] to-white/[0.03]
                  backdrop-blur-xl
                  shadow-[0_8px_30px_rgba(0,180,255,0.10)]
                  hover:shadow-[0_10px_40px_rgba(0,180,255,0.18)]
                  hover:border-cyan-300/40
                  transition-all duration-300
                  hover:-translate-y-0.5
                  disabled:opacity-60
                  cursor-pointer
                "
                >
                  {/* Glow Effect */}
                  <div
                    className="
                      absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                      bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_70%)]
                    "
                  />

                  {/* Animated Line */}
                  <div
                    className="
                      absolute top-0 left-[-100%]
                      h-full w-[120px]
                      bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent
                      skew-x-[-20deg]
                      group-hover:left-[120%]
                      transition-all duration-1000
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                    relative z-10
                    flex items-center justify-center
                    w-10 h-10
                    rounded-lg
                    border border-cyan-400/20
                    bg-cyan-400/10
                    shadow-inner shadow-cyan-400/10
                    group-hover:bg-cyan-400/15
                    transition-all duration-300
                  "
                  >
                    <FileText
                      className="
                        w-4 h-4
                        text-cyan-300
                        group-hover:scale-110
                        transition-transform duration-300
                      "
                    />
                  </div>

                  {/* Text */}
                  <div className="relative z-10 flex flex-col items-start leading-tight">
                    <span
                      className="
                        text-[14px] font-semibold
                        text-white tracking-wide
                      "
                    >
                      Download Resume
                    </span>

                    <span
                      className="
                      text-[10px]
                      uppercase tracking-[0.25em]
                      text-slate-400
                      mt-1
                    "
                    >
                      PDF • Updated 2025
                    </span>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      relative z-10
                      ml-2
                      opacity-70
                      group-hover:translate-x-1
                      group-hover:opacity-100
                      transition-all duration-300
                    "
                  />
                  <ChevronRight className="w-4 h-4 text-cyan-300 z-10" />
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="
              relative
              flex
              justify-center
              lg:justify-end
            "
            >
              {/* Glow */}
              <div className="absolute w-[420px] h-[420px] bg-blue-500/20 blur-[120px] rounded-full" />

              {/* RIGHT: High-End Interactive Portrait Card Architecture */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35, type: "spring", stiffness: 85 }}
                  className="relative w-80 h-80 sm:w-96 sm:h-96"
                >
                  {/* Outer decorative orbit rings */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/10 animate-spin"
                    style={{ animationDuration: "45s" }}
                  />
                  <div className="absolute -inset-4 rounded-full border border-blue-400/5" />

                  {/* Outer floating status widgets */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-3 -right-3 z-30 glassmorphism px-4 py-2 rounded-xl border border-blue-500/30 flex items-center space-x-2 shadow-xl"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-200 font-bold tracking-wider uppercase">
                      Active & Available
                    </span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4.5,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-2 -left-6 z-30 glassmorphism px-4 py-2.5 rounded-xl border border-slate-800/80 flex items-center space-x-3 shadow-xl hidden sm:flex"
                  >
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <div className="text-left leading-none">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">
                        Class standing
                      </span>
                      <span className="text-xs font-display font-bold text-white">
                        Very Good
                      </span>
                    </div>
                  </motion.div>

                  {/* Tech corner brackets decorations */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/40 rounded-tl z-20 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-blue-500/40 rounded-tr z-20 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-blue-500/40 rounded-bl z-20 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500/40 rounded-br z-20 pointer-events-none" />

                  {/* Main Glowing Backdrop Mesh */}
                  <div className="absolute inset-2 rounded-3xl bg-gradient-to-tr from-blue-500 to-emerald-500 opacity-20 blur-2xl animate-pulse" />

                  {/* Sleek Device Portrait Frame Container */}
                  <div className="absolute inset-3 rounded-2xl overflow-hidden border-2 border-slate-800/90 shadow-2xl bg-slate-950/80 group">
                    <img
                      src={ezzatAvatar}
                      alt="Ezzat Abdeen Portrait"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[8%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                    />

                    {/* Glass controls layer over the photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500" />

                    <div className="absolute bottom-4 left-4 right-4 p-4 glassmorphism rounded-xl border border-slate-800/60 transform translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1 text-left">
                          <div className="flex items-center space-x-1.5 text-[9px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                            <MapPin className="w-3 h-3 text-emerald-400" />
                            <span>Sohag, Egypt</span>
                          </div>
                          <h4 className="text-white font-display font-black text-sm tracking-wide">
                            Ezzat Abdeen
                          </h4>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-inner">
                          <Mail className="w-4 h-4 text-blue-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
            w-7
            h-11
            rounded-full
            border
            border-slate-700
            flex
            justify-center
            p-1.5
          "
          >
            <div className="w-1 h-2 rounded-full bg-blue-500" />
          </motion.a>
        </div>
      </section>
    </>
  );
}