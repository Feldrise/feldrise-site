// import './globals.css';
import Footer from '@/app/footer';
import Menu from './menu';
import './prism-dracula.css';
import './output.css';

/**
 * The global layout of pages
 * @param {React.ReactNode} children The children to put in the layout
 * @return {JSX.Element} The actual layout
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			{/*
				<head /> will contain the components returned by the nearest parent
				head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
			*/}
			<head />
			<body>
				<Menu />
				<div className='min-h-[128px]' />
				{children}
				<Footer />
			</body>
		</html>
	);
}
