/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    backgroundColor: {
      "container-primary": "#FFFFFF",
      "container-secondary": "#000000",
      "container-tertiary": "#F2F2F2",
      "button-container-primary": "#000000",
      "button-container-primary-hover": "#1A1A1A",
      "menu-container-hover": "#E6E6E6",
    },

    borderColor: {
      "menu-list-border": "#000000",
    },

    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },

    textColor: {
      primary: "#000000",
      secondary: "#808080",
      tertiary: "#FFFFFF",
    },

    extend: {},
  },
  plugins: [],
};
