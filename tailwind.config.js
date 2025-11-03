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
      },
    },
  },
  plugins: [],
};
