import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
export var AnimatedBackground = function () {
    var canvasRef = useRef(null);
    useEffect(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var particles = [];
        var particleCount = 50;
        // Initialize particles
        for (var i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5 - 0.3,
                life: Math.random() * 0.5 + 0.5,
            });
        }
        var animate = function () {
            // Clear canvas
            ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Update and draw particles
            particles.forEach(function (particle, index) {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life -= 0.002;
                if (particle.life <= 0) {
                    particles[index] = {
                        x: Math.random() * canvas.width,
                        y: canvas.height,
                        radius: Math.random() * 2 + 0.5,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5 - 0.3,
                        life: 1,
                    };
                }
                // Draw particle
                ctx.fillStyle = "rgba(139, 92, 246, ".concat(particle.life * 0.3, ")");
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fill();
                // Draw connecting lines
                particles.forEach(function (other) {
                    var dx = particle.x - other.x;
                    var dy = particle.y - other.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.strokeStyle = "rgba(59, 130, 246, ".concat((1 - distance / 100) * 0.1, ")");
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                });
            });
            requestAnimationFrame(animate);
        };
        animate();
        // Handle resize
        var handleResize = function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("canvas", { ref: canvasRef, className: "fixed top-0 left-0 w-full h-full pointer-events-none z-0" }), _jsxs("div", { className: "fixed top-0 left-0 w-full h-full pointer-events-none z-0", children: [_jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" }), _jsx("div", { className: "absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" })] })] }));
};
