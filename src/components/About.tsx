import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="text-primary-purple text-sm font-semibold tracking-widest uppercase">
                About Me
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-6">
                Building for the Future
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-white/70">
              <p>
                I'm a passionate software engineer with 5+ years of hands-on experience building scalable,
                high-performance web applications. My journey has taken me through enterprise platforms,
                IoT systems, and innovative peer-to-peer marketplaces.
              </p>
              <p>
                What drives me is solving complex technical challenges while maintaining clean, maintainable code.
                I specialize in modern frontend architectures and have consistently delivered measurable outcomes:
                35% performance improvements, 30% faster feature delivery, and 50% reduction in documentation effort.
              </p>
              <p>
                Beyond code, I'm deeply invested in developer productivity and team excellence. I champion
                best practices through code reviews, mentor junior developers, and continuously explore AI-assisted
                development workflows to amplify team capabilities.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex gap-4">
              <a
                href="#experience"
                className="btn-primary"
              >
                View My Work
              </a>
              <a
                href="https://www.linkedin.com/in/abhirami-kc-46874917b"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn Profile
              </a>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="glass rounded-xl p-6 hover:border-primary-purple/50 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <h3 className="font-semibold mb-1">Years of Experience</h3>
              <p className="text-sm text-white/60">
                Professional development across enterprise, startup, and freelance domains
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover:border-primary-blue/50 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-2">3</div>
              <h3 className="font-semibold mb-1">Core Framework Expertise</h3>
              <p className="text-sm text-white/60">
                Advanced proficiency in Angular, React, and Vue.js with modern best practices
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover:border-accent-teal/50 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-2">20+</div>
              <h3 className="font-semibold mb-1">Projects Completed</h3>
              <p className="text-sm text-white/60">
                From IoT dashboards to insurance platforms and peer-to-peer marketplaces
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover:border-primary-purple/50 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-2">Full Stack</div>
              <h3 className="font-semibold mb-1">T-Shaped Skills</h3>
              <p className="text-sm text-white/60">
                Deep frontend expertise with complementary backend integration capabilities
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
