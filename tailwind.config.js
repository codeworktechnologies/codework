/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#dfe7ff",
          200: "#c8d4ff",
          300: "#9fb5ff",
          400: "#7996ff",
          500: "#4f74ff",
          600: "#3659ef",
          700: "#2b46cb",
          800: "#22379f",
          900: "#1d317f"
        },
        accent: {
          500: "#4cc9ff",
          600: "#00a6ff"
        },
        ink: {
          900: "#0a0f1f",
          800: "#11172a",
          700: "#171f35"
        }
      },
      boxShadow: {
        soft: "0 16px 40px -20px rgba(56, 84, 255, 0.35)",
        glow: "0 0 0 1px rgba(96,165,250,.35), 0 12px 40px -14px rgba(59,130,246,.65)",
        light: "0 20px 45px -20px rgba(31, 41, 55, 0.22)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.38" },
          "50%": { opacity: "0.9" }
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        }
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        glow: "pulseGlow 3s ease-in-out infinite",
        "slide-in": "slideIn 0.6s ease both"
      }
    }
  },
  plugins: []
};

export default config;
