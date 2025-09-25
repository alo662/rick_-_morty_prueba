/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          light: "#A78BFA",
          dark: "#5B21B6",
        },
        accent: {
          DEFAULT: "#EC4899",
          dark: "#BE185D",
        },
        neutral: {
          light: "#F9FAFB",
          DEFAULT: "#9CA3AF",
          dark: "#111827",
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
