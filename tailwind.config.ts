import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  primary: "#C1A482",
		  secondary: "#E0D1C0",
		  accent: "#976934",
		},
		fontFamily: {
		  montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
		  playfair: ['var(--font-playfair-display)', ...fontFamily.serif],
		  parisienne: ['var(--font-parisienne)', 'cursive'],
		},
	  },
	},
	plugins: [tailwindAnimate],
  };
  
  export default config;
  
