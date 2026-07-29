import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCategory {
  category: string;
  color: string;
  skills: string[];
}

export const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Frameworks',
      color: 'from-primary-blue to-primary-purple',
      skills: ['Angular 8-17', 'React 18', 'Vue.js', 'TypeScript', 'RxJS', 'NgRx', 'Redux'],
    },
    {
      category: 'Styling & UI',
      color: 'from-primary-purple to-accent-teal',
      skills: ['Tailwind CSS', 'SASS/SCSS', 'Angular Material', 'PrimeNG', 'Bootstrap', 'CSS3', 'Animations'],
    },
    {
      category: 'Backend & API',
      color: 'from-accent-teal to-primary-blue',
      skills: ['REST APIs', 'GraphQL', 'Postman', 'Swagger', 'API Integration', 'HTTP Protocols'],
    },
    {
      category: 'Testing & Quality',
      color: 'from-primary-purple to-primary-blue',
      skills: ['Cypress', 'React Testing Library', 'Chrome DevTools', 'E2E Testing', 'Unit Testing', 'Test Automation'],
    },
    {
      category: 'AI & Productivity',
      color: 'from-primary-blue to-accent-teal',
      skills: ['GitHub Copilot', 'Cursor', 'ChatGPT', 'Claude', 'Prompt Engineering', 'MCP'],
    },
    {
      category: 'Architecture & DevOps',
      color: 'from-accent-teal to-primary-purple',
      skills: ['SPA', 'SSR (Angular Universal)', 'PWA', 'Lazy Loading', 'Module Federation', 'Git', 'Jenkins', 'Agile/Scrum'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
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
            Expertise
          </span>
          <h2 className="text-4xl font-bold mt-4">Technical Skills</h2>
          <p className="text-white/60 mt-4 max-w-2xl">
            A comprehensive toolkit built over years of hands-on development across enterprise products and innovative platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="group"
            >
              <div
                className={`bg-gradient-to-br ${category.color} p-0.5 rounded-xl`}
              >
                <div className="bg-slate rounded-xl p-6 h-full hover:bg-slate/80 transition-all group-hover:shadow-lg group-hover:shadow-primary-purple/20">
                  <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/80 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Matrix */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8">Core Proficiencies</h3>
          <div className="space-y-4">
            {[
              { name: 'Angular (8-17)', level: 95 },
              { name: 'React & React Hooks', level: 90 },
              { name: 'TypeScript', level: 92 },
              { name: 'State Management (RxJS, Redux)', level: 88 },
              { name: 'UI/UX Implementation', level: 90 },
              { name: 'Performance Optimization', level: 85 },
            ].map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-primary-purple">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-purple to-primary-blue rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
