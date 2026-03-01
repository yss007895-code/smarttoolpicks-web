import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7c3aed',
          'purple-dark': '#6d28d9',
          'purple-light': '#ede9fe',
          blue: '#2563eb',
          'blue-light': '#dbeafe',
          ink: '#0f172a',
          slate: '#334155',
        },
        surface: {
          DEFAULT: '#f8fafc',
          white: '#ffffff',
          muted: '#f1f5f9',
          border: '#e2e8f0',
          'border-dark': '#cbd5e1',
        },
        rating: '#f59e0b',
        accent: '#7c3aed',
        'accent-hover': '#6d28d9',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in-bottom': 'slideInBottom 0.3s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInBottom: { '0%': { transform: 'translateY(100%)' }, '100%': { transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
export default config;
