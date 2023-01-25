import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

interface IButtonProps {
	href?: string;
	as?: string;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
    buttonStyle?: 'primary' | 'secondary';
	onClick?: () => void;
	children?: React.ReactNode;
}

/**
 * A button
 * @param {IButtonProps} props The props of the button
 * @return {JSX.Element} The button component
 */
export default function Button(props: IButtonProps): JSX.Element {
	let className = cx(
		'w-fit px-8 py-2 duration-300 rounded-md text-xl text-center',
		props.className
	);

	if (props.buttonStyle == 'secondary') {
		className += ' bg-white text-primary hover:bg-primary-dark hover:text-white';
	} else {
		className += ' bg-primary hover:bg-primary-dark';
	}

	return props.href ? (
		<Link className={className} href={props.href} as={props.as}>
			{props.children}
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
}
