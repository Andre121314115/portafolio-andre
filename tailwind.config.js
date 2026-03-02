/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent:  '#00e5a0',
        accent2: '#a855f7',
        bg:      'var(--bg)',
        surface: 'var(--surface)',
        border:  'var(--border)',
        text:    'var(--text)',
        muted:   'var(--muted)',
        dark:    'var(--bg)',
      },
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-glow':      'pulseGlow 4s ease-in-out infinite',
        blink:             'blink 0.7s step-end infinite',
        'scroll-line':     'scrollLine 2s ease-in-out infinite',
        'fade-up':         'fadeUp 0.8s ease forwards',
        'fade-in':         'fadeIn 0.6s ease forwards',
        'gradient-shift':  'gradientShift 4s ease infinite',
      },
    },
  },
  plugins: [],
}
