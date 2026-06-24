import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileSpreadsheet, FileText, Presentation, ShieldAlert,
  Wrench, Database, Network, HelpCircle, MessagesSquare,
  Users, Clock, Zap, Shuffle, CalendarRange, Globe
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'technical' | 'soft' | 'languages'>('technical');

  // Technical skills data with proficiencies and category classification
  const technicalSkills = [
    { 
        name: 'Computer Troubleshooting', 
        level: 90, 
        category: 'Systems Support', 
        description: 'Diagnose and resolve operating system and workstation issues, perform system recovery, performance optimization, and end-user support.', 
        icon: <Wrench className="w-5 h-5 text-blue-400" /> 
    },
    { 
        name: 'IT Helpdesk & System Support', 
        level: 88, 
        category: 'IT Operations', 
        description: 'Provide Tier 1 technical support including user issue resolution, system configuration, software installation, and endpoint maintenance.', 
        icon: <HelpCircle className="w-5 h-5 text-blue-400" /> 
    },
    { 
        name: 'Microsoft Excel', 
        level: 85, 
        category: 'Office Productivity', 
        description: 'Advanced Excel usage including formulas, data analysis, reporting dashboards, charts, and spreadsheet auditing.', 
        icon: <FileSpreadsheet className="w-5 h-5 text-emerald-400" /> 
    },
    { 
        name: 'Data Entry Operations', 
        level: 92, 
        category: 'Data Management', 
        description: 'High-accuracy data entry with strong attention to detail, validation processes, and fast structured data processing.', 
        icon: <Database className="w-5 h-5 text-cyan-400" /> 
    },
    { 
        name: 'Computer Networks Basics', 
        level: 80, 
        category: 'IT Systems', 
        description: 'Foundational understanding of networking concepts including TCP/IP, LAN/WAN connectivity, and basic network troubleshooting.', 
        icon: <Network className="w-5 h-5 text-violet-400" /> 
    },
    { 
        name: 'Microsoft Word & Formatting', 
        level: 88, 
        category: 'Office Productivity', 
        description: 'Professional document formatting, template creation, structured reports, and corporate documentation standards.', 
        icon: <FileText className="w-5 h-5 text-blue-500" /> 
    },
    { name: 'Information Systems Management', level: 85, category: 'IT Operations', description: 'Understanding of information systems workflows, data organization, and their role in supporting business processes and operational efficiency.', icon: <ShieldAlert className="w-5 h-5 text-orange-400" /> 
    },
    { name: 'Microsoft PowerPoint', level: 82, category: 'Office Productivity', description: 'Design of professional presentation decks with clear structure, visual hierarchy, and corporate-ready slides.', icon: <Presentation className="w-5 h-5 text-red-400" /> },
];

  // Soft skills data
  const softSkills = [
    { name: 'Structured Communication', description: 'Conveys technical procedures and instructions using clear, patient, jargon-free terminology.', icon: <MessagesSquare className="w-6 h-6 text-blue-400" /> },
    { name: 'Team Alignment & Collab', description: 'Collaborates with other divisions to align administrative goals with immediate tech configurations.', icon: <Users className="w-6 h-6 text-indigo-400" /> },
    { name: 'Problem Solving & Root Cause Analysis', description: 'Applies structured troubleshooting methodologies to diagnose technical issues, isolate root causes, and implement effective and sustainable solutions.', icon: <Zap className="w-6 h-6 text-amber-400" /> },
    { name: 'Dynamic Adaptability', description: 'Embraces shifting priorities or emerging system updates, quickly mastering new utilities.', icon: <Shuffle className="w-6 h-6 text-emerald-400" /> },
    { name: 'Time & Ticket Scheduling', description: 'Tracks tasks systematically to complete urgent help requests without delay.', icon: <Clock className="w-6 h-6 text-fuchsia-400" /> },
    { name: 'Database Organization', description: 'Applies rigid indexing practices to manage digital storage files and folders securely.', icon: <CalendarRange className="w-6 h-6 text-teal-400" /> },
  ];

  // Languages data
  const languages = [
    { language: 'Arabic', proficiency: 'Native / Mother Tongue', percentage: 90, description: 'Flawless native command, formal literary composition, and technical vocabulary.' },
    { language: 'English', proficiency: 'Good Professional Command', percentage: 65, description: 'Excellent reading comprehension, conversational fluency, and professional email correspondence.' },
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header Title */}
        <div className="text-center md:max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-mono mb-4"
          >
            <span>// Competency Profiles</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight"
          >
            Skills & Capabilities
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed"
          >
            Explore a detailed breakdown of core technical skills, soft administrative strengths, and foreign language fluency.
          </motion.p>
        </div>

        {/* Tab Controls */}
<div className="flex justify-center mb-12 px-4">
  <div className="inline-flex w-full sm:w-auto p-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-900 shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative">
    
    {/* Tab 1: Technical */}
    <button
      id="tab-technical"
      onClick={() => setActiveTab('technical')}
      className={`group relative flex-1 sm:flex-initial px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
        activeTab === 'technical' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
      }`}
    >
      {activeTab === 'technical' && (
        <motion.span
          layoutId="activeSkillTab"
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10 block truncate">Technical Skillset</span>
    </button>

    {/* Tab 2: Soft Skills */}
    <button
      id="tab-soft"
      onClick={() => setActiveTab('soft')}
      className={`group relative flex-1 sm:flex-initial px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
        activeTab === 'soft' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
      }`}
    >
      {activeTab === 'soft' && (
        <motion.span
          layoutId="activeSkillTab"
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10 block truncate">Professional</span>
    </button>

    {/* Tab 3: Languages */}
    <button
      id="tab-languages"
      onClick={() => setActiveTab('languages')}
      className={`group relative flex-1 sm:flex-initial px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
        activeTab === 'languages' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
      }`}
    >
      {activeTab === 'languages' && (
        <motion.span
          layoutId="activeSkillTab"
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10 block truncate">Languages</span>
    </button>

  </div>
</div>

        {/* Tab content area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* TECHNICAL SKILLS TAB */}
            {activeTab === 'technical' && (
              <motion.div
                key="technical-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="p-5 rounded-2xl glassmorphism border border-slate-900 hover:border-slate-800 transition-all duration-300 flex items-start space-x-4 group"
                  >
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 group-hover:bg-blue-950/20 group-hover:border-blue-900/10 transition-colors duration-300 shrink-0">
                      {skill.icon}
                    </div>
                    <div className="grow space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] text-slate-500 font-mono tracking-wider">
                            {skill.category}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm text-blue-400 font-mono font-bold glow-text-blue">
                          {skill.level}%
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {skill.description}
                      </p>
                      
                      {/* Proficiency bar container */}
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900/50">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.05, duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-400"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* SOFT SKILLS TAB */}
            {activeTab === 'soft' && (
              <motion.div
                key="soft-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="p-6 rounded-2xl glassmorphism border border-slate-900 hover:glassmorphism-hover group transition-all duration-300 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {skill.icon}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-display font-extrabold text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* LANGUAGES TAB */}
            {activeTab === 'languages' && (
              <motion.div
                key="languages-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.language}
                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-6 sm:p-8 rounded-2xl glassmorphism border border-slate-900 hover:border-slate-800 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
                  >
                    {/* Ring gauge representation */}
                    <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#0F172A"
                          strokeWidth="6"
                          fill="transparent"
                          className="stroke-slate-900"
                        />
                        <motion.circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#3B82F6"
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray="251.2"
                          initial={{ strokeDashoffset: 251.2 }}
                          animate={{ strokeDashoffset: 251.2 - (251.2 * lang.percentage) / 100 }}
                          transition={{ delay: 0.25, duration: 1.2, ease: 'easeOut' }}
                          className="stroke-blue-500 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-base font-bold font-mono text-white leading-none">
                          {lang.percentage}%
                        </span>
                        <span className="text-[9px] text-slate-500 font-mono tracking-wider uppercase mt-1">
                          Fluency
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-center sm:text-left">
                      <div className="inline-flex items-center space-x-1.5 text-blue-400">
                        <Globe className="w-4 h-4" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider">
                          Language Proficiency
                        </span>
                      </div>
                      <h4 className="text-xl font-display font-semibold text-white">
                        {lang.language}
                      </h4>
                      <p className="text-sm font-semibold text-slate-300">
                        {lang.proficiency}
                      </p>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {lang.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
