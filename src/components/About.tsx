import { motion } from 'motion/react';
import { BookOpen, Award, ShieldAlert, Cpu, Database, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Database className="w-5 h-5 text-blue-400" />,
      title: 'Information Systems',
      text: 'Specialize in information systems, data management, and business operations, helping organizations utilize technology effectively to streamline processes and improve productivity.',
    },
    {
      icon: <Users className="w-5 h-5 text-blue-400" />,
      title: 'Business Operations',
      text: 'Solid grasp of corporate workflows, Human Resources processes, resource scheduling, administrative filing, and performance monitoring.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      title: 'IT Helpdesk Support',
      text: 'Strong foundation in information systems, data management, technical support fundamentals, and business operations, with the ability to leverage technology to improve efficiency and organizational performance.',
    },
  ];

  const stats = [
    { value: '2025', label: 'Graduation Year' },
    { value: '83.48%', label: 'Cumulative Mark' },
    { value: 'Very Good', label: 'Academic Standing' },
    { value: '100%', label: 'Dedicated Focus' },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/40">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Heading */}
        <div className="text-center md:max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-mono mb-4"
          >
            <span>// Professional Profile</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight"
          >
            About Me & Career Purpose
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed"
          >
            Discover the synthesis of technical capability and modern administrative acumen.
          </motion.p>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glassmorphism rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-900/80 hover:border-slate-800/80 transition-colors duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center space-x-3">
                <span className="w-2.5 h-6 bg-blue-500 rounded-sm inline-block" />
                <span>Interdisciplinary Advantage</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              As a Management Information Systems (MIS) graduate, I specialize in connecting technology with business objectives. My academic journey provided a solid foundation in information systems, data management, business administration, and organizational workflows, allowing me to contribute effectively to IT support, data operations, and process improvement initiatives.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am highly motivated to bring this versatile competency to entry-level roles where technical problem-solving and structured data organization are vital. Whether resolving IT Helpdesk inquiries, entering high-precision database records, cataloging inventories, or assisting HR operations, I focus on system efficiency and clear documentation.
              </p>

              <div className="pt-4 border-t border-slate-900/60 flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                Sohag Higher Institute for E-Commerce Systems, May 2025
                </span>
              </div>
            </motion.div>

            {/* Quick Stat Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  className="glassmorphism p-4 rounded-xl border border-slate-900 text-center"
                >
                  <p className="text-2xl font-display font-extrabold text-blue-400 glow-text-blue">{stat.value}</p>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group p-5 rounded-2xl glassmorphism hover:glassmorphism-hover border border-slate-900 transition-all duration-300 flex items-start space-x-4"
              >
                <div className="p-2.5 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/25 transition-colors duration-300 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-1.5">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
