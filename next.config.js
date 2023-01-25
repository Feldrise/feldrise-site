/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'localhost',
			'feldrise.com',
		],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.html$/,
			loader: 'html-loader',
		});
		return config;
	},
	async redirects() {
		return [
			{
				source: '/contact',
				destination: '/#contact',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
