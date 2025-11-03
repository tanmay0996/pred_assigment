/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': 'var(--bg-base)',
        'panel-bg': 'var(--panel-bg)',
        'muted': 'var(--muted)',
        'text-primary': 'var(--text-primary)',
        'primary': 'var(--accent-green)',
        'danger': 'var(--accent-red)',
        'highlight': 'var(--accent-highlight)',
        // Dark section colors (EPL section onwards)
        'dark-bg': '#020203',
        'dark-panel': '#19191A', //btn
        'dark-panel-hover': '#252b3d',
      },
    },
  },
  plugins: [],
};
