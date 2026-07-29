import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
export var Projects = function () {
    var _a = useInView({
        threshold: 0.1,
        triggerOnce: true,
    }), ref = _a.ref, inView = _a.inView;
    var projects = [
        {
            id: 1,
            title: 'Way.com Insurance Platform',
            description: 'Enterprise insurance comparison and purchase platform',
            longDescription: 'Built a high-performance insurance platform enabling users to compare and purchase car insurance. Achieved 35% load time reduction through frontend optimization and pioneered AI-assisted development workflows for the team.',
            technologies: ['Angular 17', 'TypeScript', 'RxJS', 'Tailwind CSS', 'GitHub Copilot', 'REST APIs'],
            link: 'https://way.com',
        },
        {
            id: 2,
            title: 'Cisco SD-WAN Management Dashboard',
            description: 'Enterprise network monitoring and configuration system',
            longDescription: 'Developed advanced network management dashboard for Cisco\'s SD-WAN platform. Engineered high-performance data tables handling 10,000+ rows with real-time monitoring capabilities for global network administrators.',
            technologies: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Advanced Data Handling'],
        },
        {
            id: 3,
            title: 'IoT Home Automation System',
            description: 'Mobile-responsive IoT control system with Raspberry Pi',
            longDescription: 'Designed full-stack IoT home automation system with mobile-responsive Angular UI enabling real-time device control (lights, sensors). Implemented RBAC and achieved sub-second response times for device operations.',
            technologies: ['Angular', 'TypeScript', 'IoT', '.NET APIs', 'Raspberry Pi', 'RBAC'],
        },
        {
            id: 4,
            title: 'Bell and Brakes - Bike Rental Platform',
            description: 'Peer-to-peer bike rental marketplace',
            longDescription: 'Full-stack peer-to-peer marketplace for bike rentals. Developed reusable React components and implemented complex booking/payment flows with multi-step validation and state management.',
            technologies: ['React', 'JavaScript', 'REST APIs', 'Java Backend', 'Payment Processing'],
            link: 'https://hirebellandbrakes.com',
            github: 'https://github.com/abhiramikc',
        },
        {
            id: 5,
            title: 'Southern Eatery - Restaurant Website',
            description: 'Responsive restaurant marketing website',
            longDescription: 'Built fully responsive restaurant website optimized for performance and mobile. Independently managed build pipeline and deployment via GitHub Pages with smooth section navigation.',
            technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
            link: 'https://abhiramikc.github.io/southern-eatery',
            github: 'https://github.com/abhiramikc/southern-eatery',
        },
    ];
    var containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };
    var itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };
    return (_jsx("section", { id: "projects", ref: ref, className: "relative py-20 md:py-32 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6 }, className: "mb-16", children: [_jsx("span", { className: "text-primary-purple text-sm font-semibold tracking-widest uppercase", children: "Portfolio" }), _jsx("h2", { className: "text-4xl font-bold mt-4", children: "Featured Projects" }), _jsx("p", { className: "text-white/60 mt-4 max-w-2xl", children: "A selection of projects showcasing my expertise in building scalable, performant, and user-centric applications." })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", animate: inView ? 'visible' : 'hidden', className: "space-y-8", children: projects.map(function (project, index) { return (_jsxs(motion.div, { variants: itemVariants, className: "glass rounded-xl overflow-hidden hover:border-primary-purple/50 transition-all group ".concat(index % 2 === 0 ? 'md:flex' : 'md:flex md:flex-row-reverse'), children: [_jsx("div", { className: "w-full md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-primary-purple/20 to-primary-blue/20 flex items-center justify-center flex-shrink-0 border-r border-white/5 group-hover:from-primary-purple/30 group-hover:to-primary-blue/30 transition-colors", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-6xl mb-2", children: "\uD83D\uDCF1" }), _jsx("span", { className: "text-white/40 text-sm", children: "Project Screenshot" })] }) }), _jsxs("div", { className: "w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold mb-2 group-hover:gradient-text transition-all", children: project.title }), _jsx("p", { className: "text-primary-purple font-medium mb-4", children: project.description }), _jsx("p", { className: "text-white/70 mb-6", children: project.longDescription }), _jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: project.technologies.map(function (tech) { return (_jsx("span", { className: "px-3 py-1 rounded-full text-xs font-medium bg-primary-blue/10 text-primary-blue border border-primary-blue/30 hover:border-primary-blue/60 transition-colors", children: tech }, tech)); }) })] }), _jsxs("div", { className: "flex gap-4 pt-6 border-t border-white/10", children: [project.link && (_jsxs("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-primary-blue hover:text-primary-purple transition-colors font-semibold", children: ["View Project", _jsx(ExternalLink, { size: 18 })] })), project.github && (_jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-white/70 hover:text-primary-purple transition-colors font-semibold", children: ["View Code", _jsx(Github, { size: 18 })] })), !project.link && !project.github && (_jsx("span", { className: "text-white/50 text-sm", children: "Available on request" }))] })] })] }, project.id)); }) })] }) }));
};
