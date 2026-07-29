/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0F172A',
        'slate': '#111827',
        'primary-blue': '#3B82F6',
        'primary-purple': '#8B5CF6',
        'accent-teal': '#14B8A6',
      },
      fontFamily: {
        'display': ['Geist', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1a1f3a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
        'gradient-teal': 'linear-gradient(135deg, #14B8A6 0%, #3B82F6 100%)',
      },
      backdropBlur: {
        'xl': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'particle': 'particle 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(100px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
