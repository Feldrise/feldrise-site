import Link from 'next/link';
import {ReactNode} from 'react';
import cx from 'classnames';

interface INavLinkProps {
	href: string;
    children?: ReactNode;
	className?: string;
}

const NavLink = (props: INavLinkProps) => {
	return (
		<Link href={props.href}>
			<a className={cx(
				'px-10 py-2 flex justify-center items-center gap-2',
				'bg-white rounded-lg text-black text-2xl text-center hover:bg-primary hover:text-white',
				props.className
			)}>
				{props.children}
			</a>
		</Link>
	);
};

export default NavLink;
