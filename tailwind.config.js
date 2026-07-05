/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Identidad de marca TecnoFix
        brand: {
          purple: '#2D2B6E', // Púrpura principal
          cyan: '#02C5CE', // Cian de acento
          cream: '#F4F4FA', // Fondo suave (crema)
          ink: '#1B1A40', // Texto oscuro (tinta)
        },
      },
      fontFamily: {
        // Fuente para títulos
        display: ['Anton', 'sans-serif'],
        // Fuente para texto/cuerpo
        sans: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(12px, 22px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.9' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        shimmer: 'shimmer 1.8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-move': 'gradientMove 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
