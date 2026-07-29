import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar } from 'lucide-react';
export var Experience = function () {
    var _a = useInView({
        threshold: 0.1,
        triggerOnce: true,
    }), ref = _a.ref, inView = _a.inView;
    var experiences = [
        {
            id: 1,
            title: 'Senior Software Engineer',
            company: 'Way.com',
            period: 'Sep 2024 - Feb 2026',
            location: 'India',
            description: 'Led frontend development for an insurance platform helping users compare and purchase car insurance online.',
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
            description: 'Developed enterprise network management dashboard for Cisco\'s SD-WAN platform used by global network administrators.',
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
            description: 'Designed and built IoT-based home automation system with mobile-responsive Angular UI and Raspberry Pi integration.',
            achievements: [
                'Full mobile-responsive Angular application with real-time device control',
                'Role-based access control securing multi-tier user access',
                'Sub-second UI response times for device operations',
                'End-to-end testing across UI, backend, and hardware layers',
            ],
            technologies: ['Angular', 'TypeScript', 'REST APIs', 'IoT', 'SQL', 'Raspberry Pi'],
        },
    ];
    var containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    var itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
        },
    };
    return (_jsx("section", { id: "experience", ref: ref, className: "relative py-20 md:py-32 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6 }, className: "mb-16", children: [_jsx("span", { className: "text-primary-purple text-sm font-semibold tracking-widest uppercase", children: "Professional Journey" }), _jsx("h2", { className: "text-4xl font-bold mt-4", children: "Work Experience" })] }), _jsx(motion.div, { ref: ref, variants: containerVariants, initial: "hidden", animate: inView ? 'visible' : 'hidden', className: "space-y-8", children: experiences.map(function (exp, index) { return (_jsxs(motion.div, { variants: itemVariants, className: "glass rounded-xl p-6 md:p-8 hover:border-primary-purple/50 transition-colors group", children: [_jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold text-white group-hover:gradient-text transition-all", children: exp.title }), _jsx("p", { className: "text-primary-purple font-semibold mt-1", children: exp.company })] }), _jsxs("div", { className: "flex flex-col md:text-right gap-2", children: [_jsxs("div", { className: "flex items-center gap-2 text-white/60", children: [_jsx(Calendar, { size: 16 }), _jsx("span", { className: "text-sm", children: exp.period })] }), exp.location && (_jsxs("div", { className: "flex items-center gap-2 text-white/60", children: [_jsx(MapPin, { size: 16 }), _jsx("span", { className: "text-sm", children: exp.location })] }))] })] }), _jsx("p", { className: "text-white/70 mb-6", children: exp.description }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-sm font-semibold text-white/80 mb-3", children: "Key Achievements" }), _jsx("ul", { className: "space-y-2", children: exp.achievements.map(function (achievement, idx) { return (_jsxs("li", { className: "flex gap-3 text-white/70", children: [_jsx("span", { className: "text-primary-purple font-bold", children: "\u2022" }), _jsx("span", { children: achievement })] }, idx)); }) })] }), _jsx("div", { className: "flex flex-wrap gap-2", children: exp.technologies.map(function (tech) { return (_jsx("span", { className: "px-3 py-1 rounded-full text-xs font-medium bg-primary-purple/10 text-primary-purple border border-primary-purple/30 hover:border-primary-purple/60 transition-colors", children: tech }, tech)); }) })] }, exp.id)); }) })] }) }));
};
