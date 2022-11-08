import {GetServerSideProps} from 'next';
import * as fs from 'fs';
import {APP_URL} from '../constants/config';

const Sitemap = () => {
	return null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const staticPaths = fs
		.readdirSync('src/pages')
		.filter((staticPage) => {
			return ![
				'api',
				'_app.tsx',
				'_document.tsx',
				'sitemap.xml.tsx',
			].includes(staticPage);
		})
		.map((staticPagePath) => {
			return `${APP_URL}/${staticPagePath}`;
		});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${
	staticPaths.map((url: string) => {
		return `
			<url>
				<loc>${url}</loc>
				<lastmod>${new Date().toISOString()}</lastmod>
				<changefreq>monthly</changefreq>
				<priority>1.0</priority>
			</url>
		`;
	})
		.join('')}
		</urlset>
	`;

	context.res.setHeader('Content-Type', 'text/xml');
	context.res.write(sitemap);
	context.res.end();

	return {
		props: {},
	};
};

export default Sitemap;
