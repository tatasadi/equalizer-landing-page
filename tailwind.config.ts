import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      darkBlue: 'hsla(244, 23%, 12%, 1)',
      lightOrange: 'hsla(24, 37%, 98%, 1)',
      mediumLightCyan: 'hsla(177, 68%, 64%, 1)',
      brightRed: 'hsla(12, 94%, 65%, 1)',
      vividOrange: 'hsla(33, 100%, 70%, 1)',
      brightCyan: 'hsla(177, 100%, 62%, 1)',
      pureBrightOrange: 'hsla(34, 100%, 50%, 1)',
    },
  },
  plugins: [],
} satisfies Config
