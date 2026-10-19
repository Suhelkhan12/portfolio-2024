import type { Config } from "tailwindcss";

const themed = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        wave: { // Corrected keyframe name
          "0%": { transform: "rotate(0.0deg);" },
          "10%": { transform: "rotate(14.0deg);" },
          "20%": { transform: "rotate(-8.0deg);" },
          "30%": { transform: "rotate(14.0deg);" },
          "40%": { transform: "rotate(-4.0deg);" },
          "50%": { transform: "rotate(10.0deg);" },
          "60%": { transform: "rotate(0.0deg);" },
          "100%": { transform: "rotate(0.0deg);" },
        },
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "bounce-slow": "bounce 2s linear infinite",
        "wave": "wave 2s linear infinite"
      },
      // Theme-aware colors resolve to the CSS variables in app/globals.css,
      // so the same class flips between the light and dark palettes.
      colors: {
        page: themed("--page"),
        surface: themed("--surface"),
        fg: themed("--fg"),
        line: themed("--line"),
        curtain: themed("--curtain"),

        bgLight: themed("--fg"),
        navLight: 'rgba(255,255,255,0.25)',
        basicOnyx: themed("--surface"),
        basicDarkGray: themed("--muted"),
        basicMediumGray: 'rgba(128, 128, 128, 0.5)',
        basicLightGray: themed("--subtle"),
        ligthFaintWhite: themed("--fg"),
        lightCardBorder: '#EBEBEB',
        lightCardBg: '#F6F6F6',
        lightBlack: 'rgba(21, 21, 21, 0.1)',

        darkCardBorder: themed("--line"),
        darkBg: themed("--page"),
        darkNav: "rgb(var(--page) / 0.7)",
        dardCardBorder: themed("--line"),
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'text-bg': "url('/text-bg.svg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;