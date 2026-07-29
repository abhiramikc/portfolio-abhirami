import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import profilePhoto from '../assets/profile.jpg';
export var Hero = function () {
    var containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };
    var itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };
    return (_jsxs("section", { className: "relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [_jsxs(motion.div, { className: "max-w-6xl mx-auto text-center relative z-10", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { variants: itemVariants, className: "mb-12", children: _jsx("div", { className: "w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-gradient-to-br from-primary-purple via-primary-blue to-accent-teal p-1.5 glass shadow-2xl hover:scale-105 transition-transform duration-300", children: _jsx("img", { src: profilePhoto, alt: "Abhirami", className: "w-full h-full rounded-full object-cover shadow-inner" }) }) }), _jsxs(motion.h1, { variants: itemVariants, className: "text-5xl md:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "block", children: "Crafting Digital" }), _jsx("span", { className: "gradient-text", children: "Experiences" })] }), _jsx(motion.p, { variants: itemVariants, className: "text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed", children: "Senior Software Engineer specialized in building scalable, high-performance web applications. 5+ years of expertise in Angular, React, and Vue.js. Passionate about clean code and exceptional UX." }), _jsxs(motion.div, { variants: itemVariants, className: "grid grid-cols-3 gap-4 md:gap-8 mb-12 text-center", children: [_jsxs("div", { className: "glass rounded-lg p-4 md:p-6", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text", children: "5+" }), _jsx("div", { className: "text-xs md:text-sm text-white/60", children: "Years Experience" })] }), _jsxs("div", { className: "glass rounded-lg p-4 md:p-6", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text", children: "20+" }), _jsx("div", { className: "text-xs md:text-sm text-white/60", children: "Projects Delivered" })] }), _jsxs("div", { className: "glass rounded-lg p-4 md:p-6", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text", children: "35%" }), _jsx("div", { className: "text-xs md:text-sm text-white/60", children: "Performance Gain" })] })] }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row gap-4 justify-center mb-16", children: [_jsxs("a", { href: "mailto:kcabhirami@gmail.com", className: "btn-primary inline-flex items-center justify-center gap-2", children: ["Let's Work Together", _jsx(ArrowDown, { size: 18, className: "group-hover:translate-y-1 transition-transform" })] }), _jsxs("a", { href: "https://github.com/abhiramikc", target: "_blank", rel: "noopener noreferrer", className: "btn-secondary inline-flex items-center justify-center gap-2", children: ["View on GitHub", _jsx(ExternalLink, { size: 18 })] })] }), _jsx(motion.div, { variants: itemVariants, className: "flex justify-center", children: _jsx(motion.div, { animate: { y: [0, 10, 0] }, transition: { duration: 2, repeat: Infinity }, className: "text-white/40 hover:text-white/60 transition-colors cursor-pointer", onClick: function () {
                                var _a;
                                (_a = document.querySelector('#about')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
                            }, children: _jsx(ArrowDown, { size: 24 }) }) })] }), _jsx("div", { className: "absolute top-1/4 left-0 w-72 h-72 bg-primary-purple/10 rounded-full blur-3xl -z-10" }), _jsx("div", { className: "absolute bottom-1/4 right-0 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl -z-10" })] }));
};
