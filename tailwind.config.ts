import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
  content: [
    'app/**/*.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#1e293b',
        darker: '#0f172a',
        secondary: '#64748b'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      },
      screens: {
        '2xl': '1024px'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: []
}
