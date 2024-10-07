/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'custom': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        "primary": "var(--primary-font)",
        "secondary": "var(--secondary-font)",
        "tertiary": "var(--tertiary-font)",
      },
      colors: {
        "main": "var(--main-bg)",
        "titlebar": "var(--titlebar-bg)",
        "sidebar": "var(--sidebar-bg)",
        "explorer": "var(--explorer-bg)",
        "explorer-hover": "var(--explorer-hover-bg)",
        "tabbar": "var(--tabs-bg)",
        "tabbar-active": "var(--tab-active-bg)",
        "tab": "var(--tab-border)",
        "bottombar": "var(--bottombar-bg)",
        "bottombar-hover": "var(--bottombar-hover-bg)",
        "minimize": "var(--minimize-btn-clr)",
        "maximize": "var(--maximize-btn-clr)",
        "close": "var(--close-btn-clr)",
        "accent": "var(--accent-clr)",
        "scroll": "var(--scrollbar-thumb-clr)",
      },
    },
  },
  plugins: [],
}
