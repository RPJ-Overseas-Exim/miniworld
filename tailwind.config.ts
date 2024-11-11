import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        foreground: {
            purple: "var(--foreground-purple)",
            pink: "var(--foreground-pink)",
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
