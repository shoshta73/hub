import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      },
    },
    colors: {
      red: {
        50: "#FEEDEC",
        100: "#FDDBD8",
        200: "#FAB2AD",
        300: "#F88E86",
        400: "#F66A5F",
        500: "#F44336",
        600: "#E31B0C",
        700: "#A91409",
        800: "#6F0D06",
        900: "#3A0703",
        950: "#1D0302",
      },
      orange: {
        50: "#FFF5E5",
        100: "#FFEBCC",
        200: "#FFD699",
        300: "#FFC266",
        400: "#FFAD33",
        500: "#FF9800",
        600: "#CC7A00",
        700: "#995C00",
        800: "#663D00",
        900: "#331F00",
        950: "#190F00",
      },
      gray: {
        50: "#F5F5F5",
        100: "#EBEBEB",
        200: "#D9D9D9",
        300: "#C4C4C4",
        400: "#B3B3B3",
        500: "#9E9E9E",
        600: "#808080",
        700: "#5E5E5E",
        800: "#404040",
        900: "#1F1F1F",
        950: "#0F0F0F",
      },
      green: {
        50: "#EDF7EE",
        100: "#DBF0DC",
        200: "#B8E0B9",
        300: "#94D196",
        400: "#6DC070",
        500: "#4CAF50",
        600: "#3C8B3F",
        700: "#2E6B30",
        800: "#1F4720",
        900: "#0F2410",
        950: "#081208",
      },
      yellow: {
        50: "#FFFDEB",
        100: "#FFFBD6",
        200: "#FFF7B3",
        300: "#FFF38A",
        400: "#FFEF61",
        500: "#FFEB3B",
        600: "#FAE100",
        700: "#BDAA00",
        800: "#807300",
        900: "#3D3700",
        950: "#1F1C00",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "1": "1px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "5": "5px",
      "6": "6px",
      "7": "7px",
      "8": "8px",
      "9": "9px",
      "10": "10px",
      "11": "11px",
      "12": "12px",
      "13": "13px",
      "14": "14px",
      "15": "15px",
      "16": "16px",
    },
  },
  plugins: [],
} satisfies Config;
