import BlogPreview from '@/components/blog/blog-preview';
import {getAllPosts} from '@/helpers/blog-helper';
import {TypeBlogDetails} from '@/types/type-blog-details';

/**
 * The blog of Feldrise
 * @return {Promise<JSX.Element>} The blog page of Feldrise
 */
export default async function Blog(): Promise<JSX.Element> {
	const posts = getAllPosts();

	return (
		<div className='w-full grow'>
			<section className='w-full py-12 md:py-24 px-8 flex justify-center items-center flex-col bg-header-blog bg-cover bg-center'>
				<div className='w-full px-8 py-16 bg-neutral rounded-md flex justify-center items-center'>
					<h1
						className='text-5xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]'
						style={{
							textDecorationSkipInk: 'none',
						}}
					>
						Le blog
					</h1>
				</div>
			</section>
			<div className="flex flex-wrap p-5 gap-5 justify-start">
				{posts.map((blogItem: TypeBlogDetails) => (
					<BlogPreview
						key={blogItem.slug}
						slug={blogItem.slug}
						title={blogItem.data.title}
						description={blogItem.data.description}
						imageUrl={blogItem.data.banner}
						tags={blogItem.data.tags}
						date={blogItem.data.date}
					/>
				))}
			</div>
		</div>
	);
}
