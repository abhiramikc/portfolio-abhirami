import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

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

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:kcabhirami@gmail.com',
      value: 'kcabhirami@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhirami-kc-46874917b',
      value: 'linkedin.com/in/abhirami-kc',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/abhiramikc',
      value: 'github.com/abhiramikc',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-primary-purple text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's Build Something
              <span className="gradient-text"> Extraordinary</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </motion.div>

          {/* Main CTA */}
          <motion.div variants={itemVariants} className="mb-16">
            <a
              href="mailto:kcabhirami@gmail.com"
              className="btn-primary inline-block text-lg px-8 py-4 hover:shadow-lg hover:shadow-primary-purple/50"
            >
              Send Me an Email
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-6 hover:border-primary-purple/50 transition-all group"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-primary-purple group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{link.label}</h3>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                    {link.value}
                  </p>
                  <div className="flex justify-center mt-4">
                    <ExternalLink className="w-4 h-4 text-primary-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-xl p-8"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-white/60 text-sm mb-1">Location</p>
                <p className="text-white font-medium">Toronto, Canada</p>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Timezone</p>
                <p className="text-white font-medium">EST (UTC-5)</p>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Availability</p>
                <p className="text-white font-medium">Open to Opportunities</p>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Response Time</p>
                <p className="text-white font-medium">24-48 Hours</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-purple/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};
