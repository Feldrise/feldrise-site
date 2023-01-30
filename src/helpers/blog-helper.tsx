import fs from 'fs';
import matter from 'gray-matter';
import {join} from 'path';
import {TypeBlogDetails} from '../types/type-blog-details';
import {TypeBlogMetaData} from '../types/type-blog-metadata';

const postsDirectory = join(process.cwd(), '_posts');

/**
 * Return the list of all posts slugs
 * @return {string[]} Return the list of all posts slugs
 */
export function getPostSlugs(): string[] {
	return fs.readdirSync(postsDirectory);
}

/**
 * Return the post details,
 * @param {string} slug The slug of the post
 * @return {TypeBlogDetails} Les détails du blog
 */
export function getPostBySlug(slug: string): TypeBlogDetails {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const {data, content} = matter(fileContents);

	return {slug: realSlug, content, data: data as TypeBlogMetaData};
}

/**
 * Retourn les posts du blog
 * @return {TypeBlogDetails[]} La liste des posts de blog
 */
export function getAllPosts(): TypeBlogDetails[] {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		.sort((post1, post2) =>
			new Date(post1.data.date) > new Date(post2.data.date) ? -1 : 1
		);

	return posts;
}
