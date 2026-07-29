import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
export var Contact = function () {
    var _a = useInView({
        threshold: 0.3,
        triggerOnce: true,
    }), ref = _a.ref, inView = _a.inView;
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
    var socialLinks = [
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
    return (_jsxs("section", { id: "contact", ref: ref, className: "relative py-20 md:py-32 px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: inView ? 'visible' : 'hidden', className: "text-center", children: [_jsxs(motion.div, { variants: itemVariants, className: "mb-8", children: [_jsx("span", { className: "text-primary-purple text-sm font-semibold tracking-widest uppercase", children: "Get In Touch" }), _jsxs("h2", { className: "text-4xl md:text-5xl font-bold mt-4 mb-6", children: ["Let's Build Something", _jsx("span", { className: "gradient-text", children: " Extraordinary" })] }), _jsx("p", { className: "text-lg text-white/70 max-w-2xl mx-auto", children: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!" })] }), _jsx(motion.div, { variants: itemVariants, className: "mb-16", children: _jsx("a", { href: "mailto:kcabhirami@gmail.com", className: "btn-primary inline-block text-lg px-8 py-4 hover:shadow-lg hover:shadow-primary-purple/50", children: "Send Me an Email" }) }), _jsx(motion.div, { variants: itemVariants, className: "grid md:grid-cols-3 gap-6 mb-16", children: socialLinks.map(function (link) {
                                var Icon = link.icon;
                                return (_jsxs("a", { href: link.href, target: "_blank", rel: "noopener noreferrer", className: "glass rounded-xl p-6 hover:border-primary-purple/50 transition-all group", children: [_jsx(Icon, { className: "w-8 h-8 mx-auto mb-4 text-primary-purple group-hover:scale-110 transition-transform" }), _jsx("h3", { className: "font-semibold mb-2", children: link.label }), _jsx("p", { className: "text-sm text-white/60 group-hover:text-white/80 transition-colors", children: link.value }), _jsx("div", { className: "flex justify-center mt-4", children: _jsx(ExternalLink, { className: "w-4 h-4 text-primary-purple opacity-0 group-hover:opacity-100 transition-opacity" }) })] }, link.label));
                            }) }), _jsxs(motion.div, { variants: itemVariants, className: "glass rounded-xl p-8", children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Quick Facts" }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-left", children: [_jsxs("div", { children: [_jsx("p", { className: "text-white/60 text-sm mb-1", children: "Location" }), _jsx("p", { className: "text-white font-medium", children: "Toronto, Canada" })] }), _jsxs("div", { children: [_jsx("p", { className: "text-white/60 text-sm mb-1", children: "Timezone" }), _jsx("p", { className: "text-white font-medium", children: "EST (UTC-5)" })] }), _jsxs("div", { children: [_jsx("p", { className: "text-white/60 text-sm mb-1", children: "Availability" }), _jsx("p", { className: "text-white font-medium", children: "Open to Opportunities" })] }), _jsxs("div", { children: [_jsx("p", { className: "text-white/60 text-sm mb-1", children: "Response Time" }), _jsx("p", { className: "text-white font-medium", children: "24-48 Hours" })] })] })] })] }) }), _jsx("div", { className: "absolute bottom-0 left-0 w-72 h-72 bg-primary-purple/10 rounded-full blur-3xl -z-10" }), _jsx("div", { className: "absolute top-1/2 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl -z-10" })] }));
};
