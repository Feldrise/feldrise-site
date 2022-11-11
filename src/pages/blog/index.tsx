import {GetServerSidePropsResult, NextPage} from 'next';
import BlogPreview from '../../components/molecules/Blog/BlogPreview';
import SideBar from '../../components/molecules/Contact/SideBar';
import Section from '../../components/organisms/Section';
import {getAllPosts} from '../../helpers/blog-helper';
import {TypeBlogDetails} from '../../types/TypeBlogDetails';

export const getServerSideProps = (): GetServerSidePropsResult<BlogIndexProps> => {
	const postsList = getAllPosts();

	return {
		props: {
			posts: postsList,
		},
	};
};

interface BlogIndexProps {
	posts: TypeBlogDetails[];
	children?: React.ReactNode;
}

const BlogArticle: NextPage<BlogIndexProps> = (options: BlogIndexProps) => {
	const {posts} = options;
	return (
		<>
			<Section>
				<div className='relative h-screen overflow-hidden md:flex'>
					<div className='flex-1 h-screen overflow-y-auto lg:mr-[334px]'>
						<div className="flex flex-wrap p-5 gap-5 justify-evenly">
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
					<div className='sidebar hidden lg:block absolute inset-y-0 right-0 w-[324px]'>
						<div className='flex items-center justify-center mt-16'>
							<SideBar />
						</div>
					</div>
				</div>
			</Section>
		</>
	);
};

export default BlogArticle;
