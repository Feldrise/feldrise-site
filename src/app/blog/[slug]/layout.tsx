import SideBar from '../sidebar';

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
		<div className='w-full flex items-center justify-center'>
			<main className='w-full grow max-w-desktop relative'>
				<div className='relative h-[calc(100vh-(258px))] overflow-hidden md:flex'>
					<div className='flex-1 h-[calc(100vh-(258px))] pb-[128px] overflow-y-auto lg:mr-[334px]'>
						{children}
					</div>
				</div>
				<div className='sidebar hidden lg:block absolute inset-y-0 right-0 w-[324px]'>
					<div className='flex items-center justify-center mt-16'>
						<SideBar />
					</div>
				</div>
			</main>
		</div>
	);
}
