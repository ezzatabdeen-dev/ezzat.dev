import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="portfolio-footer" className="bg-[#030712] border-t border-slate-900/60 py-16 relative z-30 overflow-hidden">
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[150px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

          <div className="space-y-2 text-center md:text-left">
            <span className="font-sans font-extrabold text-white tracking-wider text-xl block uppercase bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Ezzat Abdeen
            </span>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Management Information Systems (MIS) • Sohag, Egypt
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-900 text-[10px] font-mono text-emerald-400 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>SYSTEM STATUS: OPERATIONAL</span>
            </div>
          </div>

          <div className="text-center md:text-right flex flex-col justify-center md:items-end gap-2">
            <p className="text-xs font-semibold text-slate-300">
              &copy; {currentYear} Ezzat Abdeen Abdelrahman Ahmed
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}