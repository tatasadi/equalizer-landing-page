import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: 'hsl(20, 33%, 98%)',
        'dark-blue': 'hsla(244, 23%, 12%, 1)',
        'light-orange': 'hsla(24, 37%, 98%, 1)',
        'medium-light-cyan': 'hsla(177, 68%, 64%, 1)',
        'bright-red': 'hsla(12, 94%, 65%, 1)',
        'vivid-orange': 'hsla(33, 100%, 70%, 1)',
        'bright-cyan': 'hsla(177, 100%, 62%, 1)',
        'pure-bright-orange': 'hsla(34, 100%, 50%, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
