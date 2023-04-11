import SideBar from './sidebar';

/**
 * The layout for the blog
 * @param {React.ReactNode} param0 The children of the layout
 * @return {JSX.Element} The blog layout
 */
export default function BlogLayout({
	children,
} : {
	children: React.ReactNode
}) {
	return (
		<main className='w-full flex flex-col items-left'>
			<div className='hidden lg:block w-full sticky top-28 bottom-28 '>
				<div className='absolute right-8 w-[324px]'>
					<div className='flex items-center justify-center mt-16 p-8  bg-[rgba(0,0,0,0.30)] shadow-lg backdrop-blur-lg rounded-md '>
						<SideBar />
					</div>
				</div>
			</div>
			{children}
		</main>
	);
}
