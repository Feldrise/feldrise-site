import {getPostBySlug} from '@/helpers/blog-helper';
import Markdown from 'markdown-to-jsx';
import cx from 'classnames';
import Link from 'next/link';
import CodeBlock from '@/components/blog/code-block';

/**
 * The page for blog's article
 * @param {string} params The informations of the article
 * @return {JSX.Element} The page of the blog
 */
export default function BlogArticle({
	params,
}:{
	params: { slug: string };
}): JSX.Element {
	try {
		const postDetails = getPostBySlug(params.slug ?? '');

		return (
			<article className="max-w-none flex flex-col break-normal prose prose-dark md:prose-xl-dark">
				<section
					className={cx('w-full py-12 md:py-24 px-8 flex justify-center items-center flex-col bg-cover bg-center')}
					style={{
						backgroundImage: `url(${postDetails.data.banner})`,
					}}
				>
					<div className='p-12 bg-neutral rounded-md flex justify-center items-center'>
						<h1
							className='text-4xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px] m-0'
							style={{
								textDecorationSkipInk: 'none',
							}}
						>
							{postDetails.data.title}
						</h1>
					</div>
				</section>
				<p className='my-4 p-4 text-lg text-white bg-primary'>
					<Link className='text-white' href="/blog">Accueil</Link> &gt; {postDetails.data.title}
				</p>
				<Markdown
					options={{
						wrapper: 'article',
						forceBlock: false,
						overrides: {
							pre: {
								component: CodeBlock,
							},
							a: {
								props: {
									target: '_blank',
									rel: 'noreferrer',
								},
							},
						},
					}}
				>
					{postDetails.content}
				</Markdown>
			</article>
		);
	} catch {
		return (
			<p>404 not found</p>
		);
	}
}
