import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
export var Navigation = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useState(false), scrolled = _b[0], setScrolled = _b[1];
    useEffect(function () {
        var handleScroll = function () {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return function () { return window.removeEventListener('scroll', handleScroll); };
    }, []);
    var navItems = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];
    var handleNavClick = function (href) {
        setIsOpen(false);
        var element = document.querySelector(href);
        element === null || element === void 0 ? void 0 : element.scrollIntoView({ behavior: 'smooth' });
    };
    return (_jsxs("nav", { className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(scrolled ? 'glass py-4' : 'py-6'), children: [_jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center", children: [_jsx(motion.a, { href: "#", className: "text-xl font-bold gradient-text", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "AC" }), _jsx("div", { className: "hidden md:flex items-center gap-1", children: navItems.map(function (item) { return (_jsx("button", { onClick: function () { return handleNavClick(item.href); }, className: "px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all link-hover", children: item.label }, item.label)); }) }), _jsx("a", { href: "mailto:kcabhirami@gmail.com", className: "hidden md:block btn-primary text-sm", children: "Get in Touch" }), _jsx("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "md:hidden p-2 rounded-lg hover:bg-white/5 transition-all", children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), isOpen && (_jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "md:hidden glass mt-4 mx-4 p-4 rounded-xl", children: _jsxs("div", { className: "space-y-2", children: [navItems.map(function (item) { return (_jsx("button", { onClick: function () { return handleNavClick(item.href); }, className: "w-full text-left px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all", children: item.label }, item.label)); }), _jsx("a", { href: "mailto:kcabhirami@gmail.com", className: "block w-full btn-primary text-center mt-4", children: "Get in Touch" })] }) }))] }));
};
