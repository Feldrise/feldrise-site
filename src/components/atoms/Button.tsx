import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

interface IButtonProps {
	href?: string;
	as?: string;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	children?: React.ReactNode;
}

const Button = (props: IButtonProps) => {
	const className = cx(
		'w-fit px-8 py-2 bg-primary hover:bg-primary-dark duration-300 rounded-md text-2xl text-center',
		props.className
	);

	return props.href ? (
		<Link href={props.href} as={props.as}>
			<a className={className}>{props.children}</a>
		</Link>
	) : (
		<button
			className={className}
			type={props.type}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
