import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const curricularPillars = [
    {
      title: 'Information Systems',
      topics: ['Database Management (SQL)', 'Systems Analysis & Design', 'E-Commerce Applications', 'Decision Support Systems'],
    },
    {
      title: 'Business Administration',
      topics: ['Human Resource Management', 'Financial Planning & Accounting', 'Organizational Behavior', 'Strategic Project Management'],
    },
    {
      title: 'Information Technology',
      topics: ['Computer Networking Protocols', 'PC Operating Systems & Assembly', 'IT Infrastructure Design', 'Digital Security Foundations'],
    },
  ];

  return (
    <section id="education" className="py-24 relative bg-[#020617] overflow-hidden">
      {/* Decorative vector meshes */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-10 w-96 h-95 bg-blue-600/5 blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Heading */}
        <div className="text-center md:max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-mono mb-4"
          >
            <span>// Academic Path</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight"
          >
            Education & Academic Focus
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed"
          >
            Honorable academic background establishing a solid foundation in both computing and commerce.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-900 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            
            {/* Degree Node */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Node Bullet Icon */}
              <div className="absolute -left-[39px] sm:-left-[55px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#020617] border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/20 z-10">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Node Card */}
              <div className="glassmorphism rounded-2xl p-6 sm:p-8 border border-slate-900 hover:border-slate-800 transition-colors duration-300 space-y-6">
                
                {/* Degree Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="px-2.5 py-1 text-[10px] font-mono uppercase bg-blue-500/10 text-blue-400 rounded-md font-bold tracking-wider">
                      Bachelor’s Degree (B.Sc.)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white pt-1">
                      Management Information Systems (MIS)
                    </h3>
                    <p className="text-blue-400 text-sm sm:text-base font-medium flex items-center space-x-1">
                      <span>Sohag Higher Institute for E-Commerce</span>
                    </p>
                  </div>

                  {/* Graduation & standing label */}
                  <div className="flex flex-col md:items-end justify-center font-mono">
                    <div className="flex items-center space-x-2 text-slate-300 text-xs sm:text-sm">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Graduated: May 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-400 text-xs mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Sohag, Egypt</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-900/60" />

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-900 flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-mono uppercase">Cumulative Mark Grade</p>
                      <h4 className="text-lg font-display font-bold text-white mt-0.5">Very Good (83.48%)</h4>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-900 flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-mono uppercase">Academic Classification</p>
                      <h4 className="text-lg font-display font-bold text-white mt-0.5">Dual-Focus: IT & Mgmt</h4>
                    </div>
                  </div>
                </div>

                {/* Graduation Project details */}
                <div className="p-5 rounded-xl bg-slate-950/30 border border-slate-900/60 space-y-2">
                  <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider font-bold">Graduation Capstone Project</h4>
                  <p className="text-slate-200 text-sm font-semibold pt-0.5">Integrating Information Technology Helpdesk Interfaces with Administrative Management Systems</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Designed an architecture exploring how databases and service desk software optimize human resource workflows, inventory checks, operating system ticket queues, and communication overhead in corporate institutions. 
                    Awarded high distinctions for demonstrating the synthesis of information infrastructure and business protocols.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Curriculum Pillar breakdown node */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Secondary bullet */}
              <div className="absolute -left-[39px] sm:-left-[55px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#020617] border-2 border-slate-800 flex items-center justify-center text-slate-500 shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>

              {/* Sub-Card Grid */}
              <div className="space-y-4">
                <h4 className="text-slate-200 text-base font-semibold pl-1 font-display">Major Core Curriculums</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {curricularPillars.map((pillar, idx) => (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="glassmorphism p-5 rounded-xl border border-slate-900 space-y-3"
                    >
                      <h5 className="text-sm font-display font-extrabold text-blue-400">{pillar.title}</h5>
                      <ul className="space-y-2">
                        {pillar.topics.map((topic) => (
                          <li key={topic} className="flex items-start text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
