const colors = {
	primary: {
		DEFAULT: "#ad59dc",
		50: "#faf5fe",
		100: "#f5ebfc",
		200: "#ead5f9",
		300: "#dbb4f3",
		400: "#c788ea",
		500: "#ad59dc",
		600: "#933abf",
		700: "#7b2d9f",
		800: "#662682",
		900: "#57246b",
		950: "#350c46",
	},
	success: {
		DEFAULT: "#168375",
		50: "#6BE6D6",
		100: "#5AE3D1",
		200: "#37DDC7",
		300: "#22C8B3",
		400: "#1CA594",
		500: "#168375",
		600: "#0E534A",
		700: "#06231F",
		800: "#000000",
		900: "#000000",
	},
	info: {
		DEFAULT: "#3F88C5",
		50: "#CCDFF0",
		100: "#BCD6EB",
		200: "#9DC2E1",
		300: "#7EAFD8",
		400: "#5E9BCE",
		500: "#3F88C5",
		600: "#2F6B9D",
		700: "#224D72",
		800: "#153046",
		900: "#08131B",
	},
	warning: {
		DEFAULT: "#FFBA08",
		50: "#FFEDC0",
		100: "#FFE8AB",
		200: "#FFDC82",
		300: "#FFD15A",
		400: "#FFC531",
		500: "#FFBA08",
		600: "#CF9500",
		700: "#976D00",
		800: "#5F4400",
		900: "#271C00",
	},
	error: {
		DEFAULT: "#D00000",
		50: "#FF8989",
		100: "#FF7474",
		200: "#FF4B4B",
		300: "#FF2323",
		400: "#F90000",
		500: "#D00000",
		600: "#980000",
		700: "#600000",
		800: "#280000",
		900: "#000000",
	},
};

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./index.html", "./src/renderer/**/*.{js,ts,jsx,tsx,css}"],
	theme: {
		fontFamily: {
			sans: [
				"-apple-system",
				"ui-sans-serif",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Oxygen",
				"Ubuntu",
				"Cantarell",
				"Fira Sans",
				"Droid Sans",
				"Helvetica Neue",
				"sans-serif",
			],
			serif: [
				"ui-serif",
				"Iowan Old Style",
				"Apple Garamond",
				"Baskerville",
				"Times New Roman",
				"Droid Serif",
				"Times",
				"Source Serif Pro",
				"serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
			],
			mono: [
				"ui-monospace",
				"Menlo",
				"Monaco",
				"Cascadia Mono",
				"Segoe UI Mono",
				"Roboto Mono",
				"Oxygen Mono",
				"Ubuntu Monospace",
				"Source Code Pro",
				"Fira Mono",
				"Droid Sans Mono",
				"Courier New",
				"monospace",
			],
		},
		extend: {
			colors,
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
