import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "me-dark": "#151619",
        "me-semidark": "#1D1F22",
        "me-dark-medium": "#2B2D31",
        "me-semidark-medium": "#35393F",
        "me-dark-light": "#5A6069",
        "me-semidark-light": "#7C8187",
        "me-gray": "#C1C4CB",
        "me-gray-medium": "#E4E4E4",
        "me-gray-light": "#F5F5F5",
        "me-orange": "#E46643",
        "me-orange-light": "#F39765",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        roboto_slab: ["var(--font-roboto-slab)"],
        roboto_mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  darkMode: 'class',

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
