const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#f40f3a",
					200: "#e60e2d",
					300: "#d81220",
					400: "#c81619",
					500: "#b81a16",
					600: "#a81d13",
					700: "#931f10",
					800: "#862210",
					900: "#7a2410",
				},
				gray: colors.gray,
				background_dark: "#151515",
				background_light: "#262626",
			},
		},
	},
	variants: {
		extend: {
			borderWidth: ["responsive", "hover", "focus"],
			opacity: ["responsive", "hover", "focus", "group-focus"],
			textColor: ["responsive", "hover", "focus", "group-focus"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
