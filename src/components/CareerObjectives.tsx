import { motion } from 'motion/react';
import { Terminal, Shield, FileSpreadsheet, Group, Keyboard, CheckCircle, Lightbulb } from 'lucide-react';

export default function CareerObjectives() {
  const objectiveAreas = [
    {
      title: 'IT Support & Helpdesk',
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      tagline: 'System Reliability & Tech Assistance',
      description: 'Seeking an entry-level opportunity in IT Support, Data Entry, or HR systems where I can apply my background in Management Information Systems to support business operations and improve workflow efficiency.',
      bullets: [
        'Resolve employee tech issues with patience and excellent communication.',
        'Configure Windows platform updates, driver patches, and workstation setups.',
        'Document systems procedures and server ticketeering steps methodically.',
      ],
      color: 'from-blue-600/10 to-indigo-600/5',
      borderColor: 'group-hover:border-blue-500/30'
    },
    {
      title: 'Data Entry & Audits',
      icon: <Keyboard className="w-6 h-6 text-cyan-400" />,
      tagline: 'High-Precision Alphanumeric Registry',
      description: 'Seeking a Data Entry Specialist position to catalog logistics, manage sheets, and ensure zero-error digital archives.',
      bullets: [
        'Organize complex spreadsheet databases in Excel with high typing speed.',
        'Maintain clean database integrity structures and verify credentials.',
        'Analyze raw logs and format reports for administrative stakeholders.',
      ],
      color: 'from-cyan-600/10 to-blue-600/5',
      borderColor: 'group-hover:border-cyan-500/30'
    },
    {
      title: 'HR Assistant Operations',
      icon: <Group className="w-6 h-6 text-emerald-400" />,
      tagline: 'Employee Records & Administrative Flow',
      description: 'Leveraging organizational MIS principles to assist in scheduling, recruiting archives, onboarding, and employee records storage.',
      bullets: [
        'Organize digital personnel folders and employee onboarding sheets.',
        'Coordinate interview timetables and draft internal memo updates.',
        'Ensure compliant confidentiality checks across file libraries.',
      ],
      color: 'from-emerald-600/10 to-teal-600/5',
      borderColor: 'group-hover:border-emerald-500/30'
    },
    {
      title: 'Information Systems',
      icon: <Shield className="w-6 h-6 text-violet-400" />,
      tagline: 'Strategic Database & Analysis Support',
      description: 'Utilizing formal MIS theory to evaluate system capabilities, implement software platforms, and bridges technical constraints with commerce goals.',
      bullets: [
        'Support ERP configurations and check sales portal database entries.',
        'Audit system data pipelines to identify bottlenecks and speed gaps.',
        'Assist managers in modeling and drafting specifications for software procurement.',
      ],
      color: 'from-violet-600/10 to-fuchsia-600/5',
      borderColor: 'group-hover:border-violet-500/30'
    },
  ];

  return (
    <section id="objectives" className="py-24 relative bg-[#020617] overflow-hidden">
      {/* Visual back glow accents */}
      <div className="absolute top-0 left-10 w-96 h-96 rounded-full bg-blue-600/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center md:max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-mono mb-4"
          >
            <span>// Professional Intent</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight"
          >
            Career Objectives
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed"
          >
            A high-growth roadmap detailing how and where Ezzat plans to add immediate value as an entry-level professional.
          </motion.p>
        </div>

        {/* Objectives Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectiveAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl glassmorphism border border-slate-900 transition-all duration-300 overflow-hidden"
            >
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${area.color} h-full flex flex-col justify-between`}>
                
                {/* Upper card block */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-slate-950 border border-slate-900/60 rounded-xl group-hover:scale-115 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase bg-slate-950/40 px-2.5 py-1 rounded-md">
                      Target Area
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-blue-400 font-mono italic">
                      {area.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed pt-1 select-none">
                    {area.description}
                  </p>
                </div>

                {/* Bullets lists */}
                <div className="mt-6 pt-6 border-t border-slate-900/40 space-y-3">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-bold font-mono uppercase">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    <span>Focus Metrics</span>
                  </div>
                  <ul className="space-y-2">
                    {area.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2.5 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
