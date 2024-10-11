import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        lora: ["var(--font-lora)", ...fontFamily.serif],
        lato: ["var(--font-lato)", ...fontFamily.sans],
      },
      colors: {
        "rich-black": "#011627",
        "light-black": "#333333",
        "darkey-bluey": "#02223c",
        orangy: "#e99741",
        "lighty-orangey": "#e997418c",
        "reddy-washey": "#e71d36",
        "washed": "#e71d36",
        "dark-white": "#ebebeb",
        "dark-blue": "#1D27AE"
      },
    },
  },
  plugins: [],
} satisfies Config;
