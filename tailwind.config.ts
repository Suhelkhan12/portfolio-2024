import { Config } from "prettier";

const config: Config = {
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
      colors: {
        bgLight: '#FBFBFB',
        navLight: 'rgba(255,255,255,0.25)',
        basicOnyx: '#181818',
        basicDarkGray: '#808080',
        basicMediumGray: 'rgba(128, 128, 128, 0.5)',
        basicLightGray: '#C5C5C5',
        ligthFaintWhite: '#F3F3F3',
        lightCardBorder: '#EBEBEB',
        lightCardBg: '#F6F6F6',
        lightBlack: 'rgba(21, 21, 21, 0.1)',

        darkCardBorder: '#383737',
        darkBg: '#0D0D0D',
        darkNav:'rgba(24, 24, 29, 0.50)',
        dardCardBorder: '#383737'
        
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