import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:kcabhirami@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abhirami-kc-46874917b', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/abhiramikc', label: 'GitHub' },
  ];

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">AC</h3>
            <p className="text-white/60 text-sm">
              Senior Software Engineer. Building scalable web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white hover:text-primary-purple transition-colors text-sm link-hover"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary-purple/50 hover:text-primary-purple transition-all"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60"
          >
            <p className="flex items-center gap-2">
              Made with <Heart size={16} className="text-primary-purple" /> by Abhirami
            </p>
            <p>© {currentYear} Abhirami K C. All rights reserved.</p>
            <p>
              Designed & Built with{' '}
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:text-primary-purple transition-colors"
              >
                React
              </a>
              {' '}&{' '}
              <a
                href="https://vitejs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-purple hover:text-primary-blue transition-colors"
              >
                Vite
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
