module.exports = {
	method: 'jit',
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero': 'url("/images/hero.png")',
			},
			colors: {
				'neutral': '#1F1F1F',
				'primary': '#AA33FF',
				'primary-dark': '#860DDC',
				'secondary': '#FF33DE',
			},
		},
		container: {
			padding: {
				DEFAULT: '2rem',
				sm: '5rem',
				md: '10rem',
				lg: '20rem',
			},
		},
	},
	plugins: [],
};
