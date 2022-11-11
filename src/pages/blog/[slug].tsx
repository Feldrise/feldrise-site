import Markdown from 'markdown-to-jsx';
import {GetServerSidePropsContext, GetServerSidePropsResult, NextPage, PreviewData} from 'next';
import Head from 'next/head';
import {ParsedUrlQuery} from 'querystring';
import CodeBlock from '../../components/molecules/CodeBlock';
import SideBar from '../../components/molecules/Contact/SideBar';
import Contact from '../../components/organisms/Contact';
import Section from '../../components/organisms/Section';
import {getPostBySlug} from '../../helpers/blog-helper';

// export const getStaticPaths = (): GetStaticPathsResult => {
// 	const posts = getPostSlugs();
// 	const paths = posts.map((postSlug: string) => {
// 		return {
// 			params: {
// 				slug: postSlug.replace('.md', ''),
// 			},
// 		};
// 	});

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };


export const getServerSideProps = (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>): GetServerSidePropsResult<BlogDetailsProps> => {
	const slug = context.params?.slug ?? '';
	const postDetails = getPostBySlug(slug.toString());

	return {
		props: {
			title: postDetails.data.title,
			date: postDetails.data.date,
			description: postDetails.data.description,
			slug: postDetails.slug,
			content: postDetails.content,
			tags: postDetails.data.tags,
			banner: postDetails.data.banner,
		},
	};
};

interface BlogDetailsProps {
  title: string;
  date: string;
  content: string;
  description: string;
  slug: string;
  tags: string[];
  banner: string;
}

const BlogArticle: NextPage<BlogDetailsProps> = (options: BlogDetailsProps) => {
	const {slug, title, description, content, banner} = options;
	return (
		<>
			<Head>
				<title>Feldrise Blog - {title}</title>
				<meta
					name="description"
					content={description}
				/>

				<meta property="og:title" content={`Feldrise Blog - ${title}`} />
				<meta
					property="og:description"
					content={description}
				/>
				<meta property="og:url" content={`https://feldrise.com/blog/${slug}`} />
				<meta property="og:image" content={`https://feldrise.com/${banner}`} />
			</Head>
			<Section>
				<div className='relative h-screen overflow-hidden md:flex mt-12'>
					<div className='flex-1 h-screen overflow-y-auto lg:mr-[350px]'>
						<article className="max-w-none break-normal prose prose-dark md:prose-xl-dark">
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
								{content}
							</Markdown>
						</article>
					</div>
					<div className='sidebar hidden lg:block absolute inset-y-0 right-0 w-[324px]'>
						<div className='flex items-center justify-center'>
							<SideBar />
						</div>
					</div>
				</div>
			</Section>
			<div className='lg:hidden'>
				<Contact/>
			</div>
		</>
	);
};

export default BlogArticle;
