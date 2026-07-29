/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#49C926',
          glow: 'rgba(73, 201, 38, 0.4)',
          dark: '#3da71f',
        },
        dark: {
          DEFAULT: '#111111',
          card: '#1A1A1A',
          lighter: '#2A2A2A',
          border: '#333333',
        },
        light: {
          bg: '#FFFFFF',
          card: '#F5F5F5',
          text: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
        heading: ['Overpass', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(73, 201, 38, 0.35)',
        'neon-strong': '0 0 35px rgba(73, 201, 38, 0.6)',
        'soft': '0 10px 30px rgba(0, 0, 0, 0.06)',
        'dark-soft': '0 10px 30px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 15px rgba(73, 201, 38, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(73, 201, 38, 0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
