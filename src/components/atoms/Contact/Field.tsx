import React from 'react';
import cx from 'classnames';

interface IFieldProps {
	name: string;
	className?: string;
	inputClassName?: string;
	type?: 'rich' | string;
	placeholder?: string;
	value?: string | number;
	required?: boolean;
}

const Field = (props: IFieldProps) => {
	return (
		<div className={cx(
			props.className,
			'w-full flex flex-col gap-4'
		)}>
			<span className="text-xl">
				{props.name} {props.required && <span className="text-sm text-red-500">*</span>}
			</span>
			{props.type == 'rich' ? (
				<textarea
					className={cx(
						props.inputClassName,
						'p-4 rounded-md text-black'
					)}
					placeholder={props.placeholder}
					value={props.value}
				/>
			) : (
				<input
					className={cx(
						props.inputClassName,
						'p-4 rounded-md text-black'
					)}
					type={props.type || 'text'}
					placeholder={props.placeholder}
					value={props.value}
				/>
			)}
		</div>
	);
};

export default Field;
