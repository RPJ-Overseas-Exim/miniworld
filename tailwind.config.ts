import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)", ...fontFamily.sans],
                montserrat: ["var(--font-regular)"]
            },
            colors: {
                custom: {
                    pink: "var(--pink)",
                    blue: "var(--blue)",
                },
                foreground: {
                    pink: "var(--foreground-pink)",
                    purple: "var(--foreground-purple)",
                    blue: "var(--foreground-blue)",
                    muted: "var(--foreground-muted)"
                },
                background: {
                    pink: "var(--bg-pink)",
                    purple: "var(--bg-purple)",
                    blue: "var(--bg-blue)",
                },
                border: {
                    pink: "var(--border-pink)",
                    purple: "var(--border-purple)",
                    blue: "var(--border-blue)",
                }
            },
            borderRadius:{
                footer: "0 6em 0 0"
            }
        },
    },
    plugins: [],
} satisfies Config;
