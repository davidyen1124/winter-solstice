/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'space-mono': ['"Space Mono"', 'monospace']
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle at center, var(--tw-gradient-stops))'
      },
      animation: {
        slideUp: 'slideUp 1.2s ease-out forwards'
      },
      keyframes: {
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.7) translateY(100px) rotateX(45deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0) rotateX(0)'
          }
        }
      }
    }
  },
  plugins: []
}
