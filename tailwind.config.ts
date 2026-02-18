import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2F6F4E',
          light: '#F4F1E8',
          cream: '#FFF8EB',
          brown: '#8B5A2B',
          dark: '#1E3923',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

export default config

