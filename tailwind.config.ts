import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#3D4592',
          'purple-dark': '#2D3470',
          'purple-light': '#ECEEF8',
          blue: '#2563eb',
          'blue-light': '#dbeafe',
          ink: '#000000',
          slate: '#444444',
          orange: '#FF4F00',
        },
        surface: {
          DEFAULT: '#FDF9F3',
          white: '#FFFFFF',
          muted: '#F7F3EC',
          border: '#E5DFD6',
          'border-dark': '#D1CAC0',
        },
        rating: '#f59e0b',
        accent: '#3D4592',
        'accent-hover': '#2D3470',
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
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
