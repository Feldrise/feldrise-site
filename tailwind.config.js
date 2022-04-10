module.exports = {
	method: 'jit',
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				slideIn: {
					'0%': {
						opacity: 0,
						transform: 'translateX(-50%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0)',
					},
				},
			},
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
				'slide-in': 'slideIn 0.2s linear forwards',
			},
		},
	},
	plugins: [],
};
