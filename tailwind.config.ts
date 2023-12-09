import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "Very-Dark-Magenta": "hsl(300, 43%, 22%)",
        "Soft-Pink": "hsl(333, 80%, 67%)",

        "Dark-Grayish-Magenta": "hsl(303, 10%, 53%)",
        "Light-Grayish-Magenta": "hsl(300, 24%, 96%)",
        "White": "hsl(0, 0 %, 100 %)",
      }
    },
  },
  plugins: [],
}
export default config
