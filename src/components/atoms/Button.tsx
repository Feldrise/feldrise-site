import React from 'react';
import cx from 'classnames';

interface IButtonProps {
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	children?: React.ReactNode;
}

const Button = (props: IButtonProps) => {
	return (
		<button
			className={cx(
				'w-fit px-8 py-2 bg-primary hover:bg-primary-dark duration-300 rounded-md text-2xl text-center',
				props.className
			)}
			type={props.type}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
