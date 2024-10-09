import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}", // Inclui também JS/JSX se houver
    "./app/**/*.{ts,tsx,js,jsx}", // Inclua a pasta app se estiver fora de src
    "./components/**/*.{ts,tsx,js,jsx}",
    "./public/**/*.html", // Inclui arquivos HTML do public
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.blue,
    },
  },
  plugins: [],
} satisfies Config;

export default config;
