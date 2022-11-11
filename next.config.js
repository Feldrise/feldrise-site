/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'localhost',
			'feldrise.com',
		],
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
