import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#84cc16', // Lime green
        background: '#0f0f0f',
        surface: '#1a1a1a',
        text: '#e0e0e0',
      },
    },
  },
  plugins: [],
}
export default config
