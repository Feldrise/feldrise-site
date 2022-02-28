import Link from 'next/link';
import {ReactNode} from 'react';

interface INavBarBtnProps {
	href: string;
    children?: ReactNode;
}

const NavBarBtn = (props: INavBarBtnProps) => {
	return (
		<Link href={props.href} passHref={true}>
			<a className="px-10 py-2 bg-white rounded-full text-2xl">
				{props.children}
			</a>
		</Link>
	);
};

export default NavBarBtn;
