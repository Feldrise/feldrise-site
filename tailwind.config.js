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
			animation: {
				'spin-slow': 'spin 2s linear infinite',
				'spin-slow-reverse': 'spin 2s linear infinite reverse',
			},
		},
	},
	plugins: [],
};
