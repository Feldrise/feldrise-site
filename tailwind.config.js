// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'neutral': '#1F1F1F',
				'primary': '#AA33FF',
				'primary-dark': '#860DDC',
				'secondary': 'rgba(255, 51, 222, .8)',
			},
			backgroundImage: {
				'header': 'url("/images/header.webp")',
			},
			maxWidth: {
				'desktop': '1440px',
			},
		},
	},
	plugins: [],
};
