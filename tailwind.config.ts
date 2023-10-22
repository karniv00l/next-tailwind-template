import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-gothic-coding)'],
      },
      colors: {
        // Gray
        // 'accent-brand-800': '#1f2937',
        // 'accent-brand-700': '#374151',
        // 'accent-brand-600': '#4b5563',

        // Slate
        'accent-brand-800': '#1e293b',
        'accent-brand-700': '#334155',
        'accent-brand-600': '#475569',
      },
    },
  },
  plugins: [],
};

export default config;
