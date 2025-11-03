export const themeColors = {
  '--bg-base': '#0a0a0a',
  '--panel-bg': '#1a1a1a',
  '--muted': '#666666',
  '--text-primary': '#ffffff',
  '--accent-green': '#7ed321',
  '--accent-red': '#ff4444',
  '--accent-highlight': '#ff6b35',
} as const;

export const applyTheme = () => {
  const root = document.documentElement;
  Object.entries(themeColors).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};
