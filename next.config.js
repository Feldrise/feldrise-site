/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'localhost',
			'feldrise.com',
		],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
