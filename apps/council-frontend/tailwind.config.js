module.exports = {
  // allows tailwind to tree shake all css not included in the files found in this array.
  content: [
    // .ts allow for long tailwind classes to be extract to their own files.
    "./pages/**/*.ts",
    "./pages/**/*.tsx",
    // .ts allow for long tailwind classes to be extract to their own files.
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Colors taken from:
        // <todo>
        // FIAT Colors
        fiatWhite: "#EBE8F3",
        fiatOffWhite: "#7f7f7f",
        fiatLavender: {
          DEFAULT: "#5C5166",
          dark: "#4d4454",
        },
        fiatBlack: {
          DEFAULT: "#030203",
          dark: "#000000",
        },
        fiatDarkGray: {
          DEFAULT: "#141116",
          dark: "#0d0b0e", // convert color to HSL, decrease L by 3%
        },
        fiatLightGray: {
          DEFAULT: "#7D6E8A",
          dark: "#4d4455",
        },
        fiatYellow: {
          DEFAULT: "#FFB238",
        },
        appBackgroundDark: "#020203",
        fiatTangerine: "#FF9058",
        fiatPurple: "#A873FF",
        fiatRed: "#E96269",
        // og element colors

        yieldLightBlue: "#75C7EE",
        yieldBlue: "#1568CA",
        denimBlue: "#7FBEEA",
        principalBlue: "#6ACDE2",
        principalRoyalBlue: "#005EBE",
        orange: "#ff4700",
        alertOrange: "#f6851b",
        lightOrange: "#ffe7de",
        clay: "#242E36",
        black: "#1B1D21",
        blueGrey: "#B2CAE3",
        paleLily: {
          DEFAULT: "#D1ECF1",
          dark: "#AADCE5",
        },
        // votingGreen: "#CDFFCD",
        fiatGreen: "#0FE196",
        deepRed: "#F73030",
        indianYellow: "#E1AF55",
        topaz: "#19C2A3",
        goldYellow: "#FFC300",
        statusGreen: "#007F00",
        statusRed: "#FAEAEA",
        hackerSky: {
          DEFAULT: "#F1F5FE",
          dark: "#e6edff",
        },
        appBackgroundLight: "#FAF9F9",

        // Deprecated colors:
        // Used this tool for color variants: https://material.io/resources/color
        brandLightBlue: {
          light: "#acffff",
          DEFAULT: "#78D3E2",
          dark: "#42a2b0",
        },
        brandDarkBlue: {
          light: "#588bf1",
          // Deprecated: use principalRoyalBlue instead
          DEFAULT: "#005EBE",
          dark: "#00368d",
        },

        dividerGray: "#28252C"
      },
      fontFamily: {
        mono: [
          "Roboto Mono",
          "source-code-pro",
          "Menlo",
          "Monaco",
          "Consolas",
          "Courier New",
          "monospace",
        ],
      },
      keyframes: {
        // intended for use on white backgrounds
        "fade-wave": {
          from: {
            background:
              "linear-gradient(to right, white, white, transparent, white, white) 100%/400%",
          },
          to: {
            background:
              "linear-gradient(to right, white, white, transparent, white, white) 0%/400%",
          },
        },
        // intended for use on white backgrounds
        "fade-wave-left": {
          from: {
            background:
              "linear-gradient(to right, white, white, transparent, white, white) 0%/400%",
          },
          to: {
            background:
              "linear-gradient(to right, white, white, transparent, white, white) 100%/400%",
          },
        },
      },
      animation: {
        "fade-wave": "fade-wave 2.5s ease-in-out infinite",
        "fade-wave-left": "fade-wave-left 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
