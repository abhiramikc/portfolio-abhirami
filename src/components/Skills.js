import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export var Skills = function () {
    var _a = useInView({
        threshold: 0.2,
        triggerOnce: true,
    }), ref = _a.ref, inView = _a.inView;
    var skillCategories = [
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
    var containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
    return (_jsx("section", { id: "skills", ref: ref, className: "relative py-20 md:py-32 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6 }, className: "mb-16", children: [_jsx("span", { className: "text-primary-purple text-sm font-semibold tracking-widest uppercase", children: "Expertise" }), _jsx("h2", { className: "text-4xl font-bold mt-4", children: "Technical Skills" }), _jsx("p", { className: "text-white/60 mt-4 max-w-2xl", children: "A comprehensive toolkit built over years of hands-on development across enterprise products and innovative platforms." })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", animate: inView ? 'visible' : 'hidden', className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: skillCategories.map(function (category) { return (_jsx(motion.div, { variants: itemVariants, className: "group", children: _jsx("div", { className: "bg-gradient-to-br ".concat(category.color, " p-0.5 rounded-xl"), children: _jsxs("div", { className: "bg-slate rounded-xl p-6 h-full hover:bg-slate/80 transition-all group-hover:shadow-lg group-hover:shadow-primary-purple/20", children: [_jsx("h3", { className: "text-lg font-bold mb-4 bg-gradient-to-r ".concat(category.color, " bg-clip-text text-transparent"), children: category.category }), _jsx("div", { className: "flex flex-wrap gap-2", children: category.skills.map(function (skill) { return (_jsx("span", { className: "px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/80 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all", children: skill }, skill)); }) })] }) }) }, category.category)); }) }), _jsxs(motion.div, { variants: itemVariants, initial: "hidden", animate: inView ? 'visible' : 'hidden', className: "mt-16", children: [_jsx("h3", { className: "text-2xl font-bold mb-8", children: "Core Proficiencies" }), _jsx("div", { className: "space-y-4", children: [
                                { name: 'Angular (8-17)', level: 95 },
                                { name: 'React & React Hooks', level: 90 },
                                { name: 'TypeScript', level: 92 },
                                { name: 'State Management (RxJS, Redux)', level: 88 },
                                { name: 'UI/UX Implementation', level: 90 },
                                { name: 'Performance Optimization', level: 85 },
                            ].map(function (skill) { return (_jsxs("div", { className: "group", children: [_jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { className: "font-semibold text-white", children: skill.name }), _jsxs("span", { className: "text-primary-purple", children: [skill.level, "%"] })] }), _jsx("div", { className: "w-full bg-white/10 rounded-full h-2 overflow-hidden", children: _jsx(motion.div, { className: "h-full bg-gradient-to-r from-primary-purple to-primary-blue rounded-full", initial: { width: 0 }, animate: inView ? { width: "".concat(skill.level, "%") } : { width: 0 }, transition: { duration: 1, delay: 0.2 } }) })] }, skill.name)); }) })] })] }) }));
};
