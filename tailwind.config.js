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
				'cats': 'url("/cats-background.svg")',
				'header': 'url("/images/header.webp")',
				'header-projects': 'url("/images/header-projects.webp")',
				'header-blog': 'url("/images/header-blog.webp")',
				'me-art': 'url("/images/me-art.webp")',
				'me': 'url("/images/me.webp")',
				'cto-illu1': 'url("/images/cto_illustration1.webp")',
				'cto-illu2': 'url("/images/cto_illustration2.webp")',
				'offer1': 'url("/images/offer1.webp")',
				'offer2': 'url("/images/offer2.webp")',
			},
			maxWidth: {
				'desktop': '1440px',
			},
			backgroundSize: {
				'full': 'auto 100%',
			},
			typography: () => ({
				dark: {
					css: {
						'color': 'white',
						'h1': {
							'color': 'white',
						},
						'h2': {
							'color': '#FF33DE',
						},
						'h3, h4': {
							'color': 'white',
						},
						'a': {
							'color': '#FF33DE',
						},
						'p , code , strong, li': {
							'color': 'white',
							'font-family': 'Lato, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
						},
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
