import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Way.com Insurance Platform',
      description: 'Enterprise insurance comparison and purchase platform',
      longDescription:
        'Built a high-performance insurance platform enabling users to compare and purchase car insurance. Achieved 35% load time reduction through frontend optimization and pioneered AI-assisted development workflows for the team.',
      technologies: ['Angular 17', 'TypeScript', 'RxJS', 'Tailwind CSS', 'GitHub Copilot', 'REST APIs'],
      link: 'https://way.com',
    },
    {
      id: 2,
      title: 'Cisco SD-WAN Management Dashboard',
      description: 'Enterprise network monitoring and configuration system',
      longDescription:
        'Developed advanced network management dashboard for Cisco\'s SD-WAN platform. Engineered high-performance data tables handling 10,000+ rows with real-time monitoring capabilities for global network administrators.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Advanced Data Handling'],
    },
    {
      id: 3,
      title: 'IoT Home Automation System',
      description: 'Mobile-responsive IoT control system with Raspberry Pi',
      longDescription:
        'Designed full-stack IoT home automation system with mobile-responsive Angular UI enabling real-time device control (lights, sensors). Implemented RBAC and achieved sub-second response times for device operations.',
      technologies: ['Angular', 'TypeScript', 'IoT', '.NET APIs', 'Raspberry Pi', 'RBAC'],
    },
    {
      id: 4,
      title: 'Bell and Brakes - Bike Rental Platform',
      description: 'Peer-to-peer bike rental marketplace',
      longDescription:
        'Full-stack peer-to-peer marketplace for bike rentals. Developed reusable React components and implemented complex booking/payment flows with multi-step validation and state management.',
      technologies: ['React', 'JavaScript', 'REST APIs', 'Java Backend', 'Payment Processing'],
      link: 'https://hirebellandbrakes.com',
      github: 'https://github.com/abhiramikc',
    },
    {
      id: 5,
      title: 'Southern Eatery - Restaurant Website',
      description: 'Responsive restaurant marketing website',
      longDescription:
        'Built fully responsive restaurant website optimized for performance and mobile. Independently managed build pipeline and deployment via GitHub Pages with smooth section navigation.',
      technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
      link: 'https://abhiramikc.github.io/southern-eatery',
      github: 'https://github.com/abhiramikc/southern-eatery',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="projects"
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
            Portfolio
          </span>
          <h2 className="text-4xl font-bold mt-4">Featured Projects</h2>
          <p className="text-white/60 mt-4 max-w-2xl">
            A selection of projects showcasing my expertise in building scalable, performant, and user-centric applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`glass rounded-xl overflow-hidden hover:border-primary-purple/50 transition-all group ${
                index % 2 === 0 ? 'md:flex' : 'md:flex md:flex-row-reverse'
              }`}
            >
              {/* Image Placeholder */}
              <div className="w-full md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-primary-purple/20 to-primary-blue/20 flex items-center justify-center flex-shrink-0 border-r border-white/5 group-hover:from-primary-purple/30 group-hover:to-primary-blue/30 transition-colors">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <span className="text-white/40 text-sm">Project Screenshot</span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-primary-purple font-medium mb-4">{project.description}</p>
                  <p className="text-white/70 mb-6">{project.longDescription}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary-blue/10 text-primary-blue border border-primary-blue/30 hover:border-primary-blue/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-white/10">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-purple transition-colors font-semibold"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/70 hover:text-primary-purple transition-colors font-semibold"
                    >
                      View Code
                      <Github size={18} />
                    </a>
                  )}
                  {!project.link && !project.github && (
                    <span className="text-white/50 text-sm">Available on request</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
