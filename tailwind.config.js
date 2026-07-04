/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
      extend: {
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          card: 'hsl(var(--card))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          'muted-foreground': 'hsl(var(--muted-foreground))',
          border: 'hsl(var(--border))',
          'accent-amber': 'hsl(var(--accent-amber))',
        },
        fontFamily: {
          serif: ['"DM Serif Display"', 'Georgia', 'serif'],
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        borderRadius: {
          DEFAULT: 'var(--radius)',
        },
      },
    },
  plugins: [],
};
