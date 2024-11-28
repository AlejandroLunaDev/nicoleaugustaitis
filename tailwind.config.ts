import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C1A482',
        secondary: '#E0D1C0',
        accent: '#976934',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
        playfair: ['var(--font-playfair-display)', ...fontFamily.serif],
        parisienne: ['var(--font-parisienne)', 'cursive'],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
		'slide-up': {
			'0%': { opacity: '0', transform: 'translateY(10px)' },
			'100%': { opacity: '1', transform: 'translateY(0)' },
		  },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 1s ease-out',
		'slide-up': 'slide-up 2s ease-out',
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
