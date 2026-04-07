/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0f172a",
          raised: "#1e293b",
          inset: "#0c1222",
          border: "#334155",
        },
        primary: {
          DEFAULT: "#38bdf8",
          light: "#7dd3fc",
          dark: "#0ea5e9",
        },
        secondary: {
          DEFAULT: "#a78bfa",
          light: "#c4b5fd",
          dark: "#7c3aed",
        },
        accent: {
          DEFAULT: "#f472b6",
          dark: "#ec4899",
        },
        neutral: {
          light: "#cbd5e1",
          DEFAULT: "#94a3b8",
          dark: "#64748b",
        },
        success: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#065F46",
        },
        warning: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          dark: "#B45309",
        },
        error: {
          DEFAULT: "#EF4444",
          light: "#F87171",
          dark: "#B91C1C",
        },
      },
    },
  },
  plugins: [],
};
