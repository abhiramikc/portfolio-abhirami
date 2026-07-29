import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export var About = function () {
    var _a = useInView({
        threshold: 0.3,
        triggerOnce: true,
    }), ref = _a.ref, inView = _a.inView;
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };
    return (_jsx("section", { id: "about", ref: ref, className: "relative py-20 md:py-32 px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-6xl mx-auto", children: _jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: inView ? 'visible' : 'hidden', className: "grid md:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { children: [_jsxs(motion.div, { variants: itemVariants, children: [_jsx("span", { className: "text-primary-purple text-sm font-semibold tracking-widest uppercase", children: "About Me" }), _jsx("h2", { className: "text-4xl font-bold mt-4 mb-6", children: "Building for the Future" })] }), _jsxs(motion.div, { variants: itemVariants, className: "space-y-4 text-white/70", children: [_jsx("p", { children: "I'm a passionate software engineer with 5+ years of hands-on experience building scalable, high-performance web applications. My journey has taken me through enterprise platforms, IoT systems, and innovative peer-to-peer marketplaces." }), _jsx("p", { children: "What drives me is solving complex technical challenges while maintaining clean, maintainable code. I specialize in modern frontend architectures and have consistently delivered measurable outcomes: 35% performance improvements, 30% faster feature delivery, and 50% reduction in documentation effort." }), _jsx("p", { children: "Beyond code, I'm deeply invested in developer productivity and team excellence. I champion best practices through code reviews, mentor junior developers, and continuously explore AI-assisted development workflows to amplify team capabilities." })] }), _jsxs(motion.div, { variants: itemVariants, className: "mt-8 flex gap-4", children: [_jsx("a", { href: "#experience", className: "btn-primary", children: "View My Work" }), _jsx("a", { href: "https://www.linkedin.com/in/abhirami-kc-46874917b", target: "_blank", rel: "noopener noreferrer", className: "btn-secondary", children: "LinkedIn Profile" })] })] }), _jsxs(motion.div, { variants: itemVariants, className: "space-y-4", children: [_jsxs("div", { className: "glass rounded-xl p-6 hover:border-primary-purple/50 transition-colors", children: [_jsx("div", { className: "text-3xl font-bold gradient-text mb-2", children: "5+" }), _jsx("h3", { className: "font-semibold mb-1", children: "Years of Experience" }), _jsx("p", { className: "text-sm text-white/60", children: "Professional development across enterprise, startup, and freelance domains" })] }), _jsxs("div", { className: "glass rounded-xl p-6 hover:border-primary-blue/50 transition-colors", children: [_jsx("div", { className: "text-3xl font-bold gradient-text mb-2", children: "3" }), _jsx("h3", { className: "font-semibold mb-1", children: "Core Framework Expertise" }), _jsx("p", { className: "text-sm text-white/60", children: "Advanced proficiency in Angular, React, and Vue.js with modern best practices" })] }), _jsxs("div", { className: "glass rounded-xl p-6 hover:border-accent-teal/50 transition-colors", children: [_jsx("div", { className: "text-3xl font-bold gradient-text mb-2", children: "20+" }), _jsx("h3", { className: "font-semibold mb-1", children: "Projects Completed" }), _jsx("p", { className: "text-sm text-white/60", children: "From IoT dashboards to insurance platforms and peer-to-peer marketplaces" })] }), _jsxs("div", { className: "glass rounded-xl p-6 hover:border-primary-purple/50 transition-colors", children: [_jsx("div", { className: "text-3xl font-bold gradient-text mb-2", children: "Full Stack" }), _jsx("h3", { className: "font-semibold mb-1", children: "T-Shaped Skills" }), _jsx("p", { className: "text-sm text-white/60", children: "Deep frontend expertise with complementary backend integration capabilities" })] })] })] }) }) }));
};
