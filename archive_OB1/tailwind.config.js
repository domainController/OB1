export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'EB Garamond'", "serif"],
      },
      colors: {
        neutral: {
          900: "#1A1A1A",
          100: "#E6E6E6",
        },
        accent: {
          DEFAULT: "#5C6AC4",
          light: "#E0E7FF",
        },
      },
    },
  },
  plugins: [],
};
