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
      textShadow:{
      'title' : '#FC0 1px 0px 30px',
      'decription': '#08C2F9 1px 0px 15px'
      },
      keyframes:{
        blink: {
         '50%' : { borderColor: 'transparent'},
      },
      typing: {
        from: {
          width: '0'
        },
        to: {
          width: '100%'     
        },
      },
    },
    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}
export default config
