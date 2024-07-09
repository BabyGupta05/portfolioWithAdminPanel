// /**
//  * Tailwind CSS configuration file
//  *
//  * This configuration extends the default theme with a custom dark theme color palette.
//  */

//        * @type {Object}
//        * @property {string} primaryBackground - Primary background color used for the main background.
//        * @property {string} secondaryBackground - Secondary background color used for secondary elements like cards.
//        * @property {string} primaryText - Primary text color used for main text content.
//        * @property {string} secondaryText - Secondary text color used for less important text like subtitles.
//        * @property {string} accentColor - Accent color used for highlights, buttons, and links.
//        * @property {string} surfaceColor - Surface color used for elements like cards and panels.
//        * @property {string} borderDividerColor - Border and divider color used for separating content.
//        * @property {string} errorColor - Error color used for error messages and indicators.
//        * @property {string} warningColor - Warning color used for warning messages and indicators.
//        */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#77E4C8",
          text: "#060930",
        },
        secondary: {
          background: "#36C2CE",
          text: "#2F3645",
        },
        accent: "#478CCF",
        surface: "#1F1F1F",
        borderDivider: "#383838",
        error: "#FF4C4C",
        warning: "#FFD700",
      },
    },
  },
  plugins: [],
};
