import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#__next",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        scarlet: "#DF5656",
        navy: "#1A278C",
        darkBlue: "#373B5C",
        purple: "#8859EC",
        mellowYellow: "#FFD789",
        "gray-80": "#F3F3F3",
        "gray-100": "#F5F5F5",
        "gray-200": "#E5E5E5",
        "gray-300": "#D4D4D4",
        "gray-400": "#A3A3A3",
        "gray-500": "#737373",
        "gray-600": "#525252",
        "gray-700": "#404040",
        "gray-800": "#262626",
        "gray-900": "#171717",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

export default config;
