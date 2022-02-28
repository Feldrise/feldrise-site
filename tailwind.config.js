module.exports = {
	method: 'jit',
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'neutral': '#1F1F1F',
				'primary': '#AA33FF',
				'secondary': '#FF33DE',
			},
		},
	},
	plugins: [],
};
