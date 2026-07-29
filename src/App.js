import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Navigation, Hero, About, Experience, Skills, Projects, Contact, Footer, AnimatedBackground, } from './components';
function App() {
    useEffect(function () {
        // Prevent layout shift and smooth scroll on load
        document.documentElement.style.scrollBehavior = 'smooth';
        return function () {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);
    return (_jsxs("div", { className: "bg-navy text-white relative", children: [_jsx(AnimatedBackground, {}), _jsxs("div", { className: "relative z-10", children: [_jsx(Navigation, {}), _jsx(Hero, {}), _jsx(About, {}), _jsx(Experience, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Contact, {}), _jsx(Footer, {})] })] }));
}
export default App;
