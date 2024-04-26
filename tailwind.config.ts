import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        mainPage: 'inset 0 10px 58px 20px black',
      },
      backgroundPosition: {
        logo: '1px 1px',
      },
      backgroundSize: {
        logo: '27px 27px',
        mainPage: '100% 100%',
      },
      backgroundImage: {
        logo: "url('/logo.png')",
        mainPage: 'url(/main-page.jpg)',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        red: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
