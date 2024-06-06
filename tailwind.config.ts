import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["fantasy"],
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
        },
      },
    ],
  },
} satisfies Config;
