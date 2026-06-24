import { motion } from 'motion/react';
import { Briefcase, ArrowRight, Compass, ShieldCheck, Mail } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/40">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center md:max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-mono mb-4"
          >
            <span>// Work History</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight"
          >
            Professional Experience
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed"
          >
            Ready to contribute, learn, and grow. Presenting a solid foundation for entry-level integration.
          </motion.p>
        </div>

        {/* Experience Core Hero Placeholder */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="rounded-2xl glassmorphism border border-slate-900 overflow-hidden relative group p-8 sm:p-12 text-center"
          >
            {/* Ambient background rays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/5 to-emerald-500/5 opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-xl mx-auto flex flex-col items-center">
              
              {/* Spinning/pulsing radar compass wrapper */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-blue-500/20 flex items-center justify-center p-3"
                >
                  <Compass className="w-8 h-8 text-blue-400/80 animate-pulse" />
                </motion.div>
                
                {/* Outward pulsing circles */}
                <span className="absolute inset-0 w-full h-full rounded-full border border-blue-500/40 animate-ping opacity-25" />
              </div>

              <div className="space-y-3">
                <span className="px-3 py-1 text-[11px] font-mono uppercase font-bold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 shadow-sm inline-block">
                  Immediate Availability
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  Actively seeking first professional opportunity.
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As a fresh MIS graduate, I possess a versatile, up-to-date skillset encompassing IT diagnostics, data organization systems, and human resources administration. I am prepared to relocate or work in Sohag, across Egypt, or remotely.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900/40 flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">Fully credentialed MIS Degree</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900/40 flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">Ready for immediate placement</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900/40 flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">High response rate to recruiters</span>
                </div>
              </div>

              <div className="pt-6">
                <a
                  id="btn-recruiter-contact"
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-bold tracking-wide group/btn py-2 cursor-pointer"
                >
                  <span className="experienceLink">Employer / Recruiter? Let’s connect today</span>
                  <ArrowRight className="experienceLinkArow w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
