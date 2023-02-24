import Link from 'next/link';
import Image from 'next/image';
import ArticleTag from './artice-tag';

interface BlogPreviewProps {
	title: string;
	description: string;
	imageUrl: string;
	date: string;
	slug: string;
	tags: string[];
}

const BlogPreview = (options: BlogPreviewProps) => {
	const {title, description, imageUrl, tags = [], date, slug} = options;

	return (
		<Link href={`/blog/${slug}`} passHref>
			<div className="
				flex flex-col pb-10 text-white overflow-hidden shadow-lg gap-4
				border border-[1px] border-secondary
				rounded-2xl hover:cursor-pointer  transition ease-in-out duration-200 hover:scale-100
				">
				<Image
					width={400}
					height={200}
					src={imageUrl}
					alt="This is the preview image of the blog"
					className="rounded-t-md"
					style={{
						width: '100%',
						height: 'auto',
					}}
				/>
				<div className="flex flex-wrap justify-starts items-center mt-6 px-6 mb-6">
					{tags.map((tag) => (
						<ArticleTag title={tag} key={tag} />
					))}
				</div>

				<div className="text-secondary font-[800] text-xl lg:text-2xl px-6 py-2">
					{title}
				</div>
				<div className="line-clamp-3 font-light px-6">
					{description}
				</div>
				<div className="font-medium px-6">{date}</div>
			</div>
		</Link>
	);
};

export default BlogPreview;
