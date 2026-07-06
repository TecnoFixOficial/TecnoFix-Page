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
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(30px, -22px)' },
          '66%': { transform: 'translate(-24px, 24px)' },
        },
        driftSlow: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(26px, 20px) scale(1.06)' },
          '50%': { transform: 'translate(-18px, 32px) scale(0.97)' },
          '75%': { transform: 'translate(20px, -16px) scale(1.03)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        // Trayectorias orgánicas para las formas del hero: cada una recorre
        // un camino irregular distinto (traslación + giro leve).
        // Recorridos amplios sobre todo en horizontal (hay más espacio) y
        // moderados en vertical, para no cruzar los bordes de la sección.
        wanderA: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '20%': { transform: 'translate(110px, -55px) rotate(12deg) scale(1.08)' },
          '45%': { transform: 'translate(-70px, -70px) rotate(-7deg) scale(0.94)' },
          '70%': { transform: 'translate(-140px, -20px) rotate(9deg) scale(1.05)' },
          '88%': { transform: 'translate(60px, 40px) rotate(-5deg) scale(1)' },
        },
        wanderB: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '30%': { transform: 'translate(-130px, 45px) rotate(-14deg) scale(1.1)' },
          '55%': { transform: 'translate(80px, 75px) rotate(8deg) scale(0.92)' },
          '80%': { transform: 'translate(150px, -30px) rotate(16deg) scale(1.04)' },
        },
        // Variante para bandas bajas (PageHero): viaja mucho en horizontal
        // y muy poco en vertical, para no cruzar los bordes de la franja.
        wanderX: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(90px, -14px) rotate(10deg) scale(1.07)' },
          '50%': { transform: 'translate(-60px, 12px) rotate(-6deg) scale(0.95)' },
          '75%': { transform: 'translate(-120px, -8px) rotate(5deg) scale(1.04)' },
        },
        wanderC: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(90px, 55px) rotate(18deg) scale(1.12)' },
          '50%': { transform: 'translate(-110px, 20px) rotate(4deg) scale(0.95)' },
          '75%': { transform: 'translate(-40px, -60px) rotate(-12deg) scale(1.06)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        shimmer: 'shimmer 1.8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-move': 'gradientMove 7s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
        'drift-slow': 'driftSlow 24s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'wander-a': 'wanderA 13s ease-in-out infinite',
        'wander-b': 'wanderB 16s ease-in-out infinite',
        'wander-c': 'wanderC 19s ease-in-out infinite',
        'wander-x': 'wanderX 17s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
