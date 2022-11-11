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
				'secondary': 'rgba(255, 51, 222, .8)',
			},
			animation: {
				'spin-slow': 'spin 2s linear infinite',
				'spin-slow-reverse': 'spin 2s linear infinite reverse',
				'slide-in': 'slideIn 0.2s linear forwards',
			},
			typography: () => ({
				dark: {
					css: {
						'color': 'white',
						'h1': {
							'color': 'white',
							'font-size': '2.8em',
						},
						'h2': {
							'color': '#FF33DE',
							'font-size': '1.8em',
						},
						'h3, h4': {
							'color': 'white',
							'font-size': '1.5em',
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
