import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#163322",
        panel: "#FFFFFF",
        pine: "#0F5132",
        moss: "#16A34A",
        leaf: "#22C55E",
        mist: "#F4FFF4"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.20)" },
          "50%": { boxShadow: "0 0 0 16px rgba(34, 197, 94, 0)" }
        },
        aurora: {
          "0%": { transform: "translate3d(-5%, -4%, 0) scale(1)" },
          "50%": { transform: "translate3d(5%, 2%, 0) scale(1.05)" },
          "100%": { transform: "translate3d(1%, -3%, 0) scale(1)" }
        }
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "float-slow": "float 7s ease-in-out infinite",
        glow: "pulseGlow 2.6s ease-in-out infinite",
        aurora: "aurora 15s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
