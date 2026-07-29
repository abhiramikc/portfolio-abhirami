import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

import profilePhoto from '../assets/profile.jpg';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-gradient-to-br from-primary-purple via-primary-blue to-accent-teal p-1.5 glass shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src={profilePhoto}
              alt="Abhirami"
              className="w-full h-full rounded-full object-cover shadow-inner"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block">Crafting Digital</span>
          <span className="gradient-text">Experiences</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Senior Software Engineer specialized in building scalable, high-performance web applications.
          5+ years of expertise in Angular, React, and Vue.js. Passionate about clean code and exceptional UX.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-12 text-center"
        >
          <div className="glass rounded-lg p-4 md:p-6">
            <div className="text-2xl md:text-3xl font-bold gradient-text">5+</div>
            <div className="text-xs md:text-sm text-white/60">Years Experience</div>
          </div>
          <div className="glass rounded-lg p-4 md:p-6">
            <div className="text-2xl md:text-3xl font-bold gradient-text">20+</div>
            <div className="text-xs md:text-sm text-white/60">Projects Delivered</div>
          </div>
          <div className="glass rounded-lg p-4 md:p-6">
            <div className="text-2xl md:text-3xl font-bold gradient-text">35%</div>
            <div className="text-xs md:text-sm text-white/60">Performance Gain</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="mailto:kcabhirami@gmail.com"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Let's Work Together
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="https://github.com/abhiramikc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            View on GitHub
            <ExternalLink size={18} />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/40 hover:text-white/60 transition-colors cursor-pointer"
            onClick={() => {
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-purple/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};
