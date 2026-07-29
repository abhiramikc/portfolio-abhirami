import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Way.com',
      period: 'Sep 2024 - Feb 2026',
      location: 'India',
      description:
        'Led frontend development for an insurance platform helping users compare and purchase car insurance online.',
      achievements: [
        '35% application load time reduction through performance optimizations',
        '30% faster feature delivery with AI-assisted development workflows',
        '50% reduction in documentation effort via prompt engineering',
        'Architected production-grade Angular 17 components with RxJS',
      ],
      technologies: ['Angular 17', 'TypeScript', 'RxJS', 'REST APIs', 'GitHub Copilot', 'Jenkins'],
    },
    {
      id: 2,
      title: 'Software Developer II',
      company: 'UST',
      period: 'Mar 2022 - Apr 2024',
      location: 'India',
      description:
        'Developed enterprise network management dashboard for Cisco\'s SD-WAN platform used by global network administrators.',
      achievements: [
        '10+ Angular feature modules for real-time network monitoring',
        'High-performance data tables handling 10,000+ rows with server-side pagination',
        'Built library of 20+ reusable components, reducing dev time by 25%',
        'Optimized REST API integration with caching strategies',
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'React', 'Vue.js', 'REST APIs'],
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'Claysys Technologies',
      period: 'Jan 2021 - Mar 2022',
      location: 'India',
      description:
        'Designed and built IoT-based home automation system with mobile-responsive Angular UI and Raspberry Pi integration.',
      achievements: [
        'Full mobile-responsive Angular application with real-time device control',
        'Role-based access control securing multi-tier user access',
        'Sub-second UI response times for device operations',
        'End-to-end testing across UI, backend, and hardware layers',
      ],
      technologies: ['Angular', 'TypeScript', 'REST APIs', 'IoT', 'SQL', 'Raspberry Pi'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary-purple text-sm font-semibold tracking-widest uppercase">
            Professional Journey
          </span>
          <h2 className="text-4xl font-bold mt-4">Work Experience</h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="glass rounded-xl p-6 md:p-8 hover:border-primary-purple/50 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all">
                    {exp.title}
                  </h3>
                  <p className="text-primary-purple font-semibold mt-1">{exp.company}</p>
                </div>
                <div className="flex flex-col md:text-right gap-2">
                  <div className="flex items-center gap-2 text-white/60">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2 text-white/60">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-white/70 mb-6">{exp.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/80 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-white/70">
                      <span className="text-primary-purple font-bold">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary-purple/10 text-primary-purple border border-primary-purple/30 hover:border-primary-purple/60 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
