import React, {HTMLInputTypeAttribute} from 'react';
import cx from 'classnames';
import {UseFormRegister} from 'react-hook-form';
import {IGrizouContestEntry} from '../../molecules/Forms/GrizouContestForm';

interface IFieldProps {
	label?: string;
	className?: string;
	inputClassName?: string;
	type?: 'rich' | HTMLInputTypeAttribute;
	placeholder?: string;
	value?: string | number;
	name: string;
	register: UseFormRegister<IGrizouContestEntry>;
	required?: boolean;
}

const Field = (props: IFieldProps) => {
	return (
		<div className={cx(
			props.className,
			'w-full flex flex-col gap-4'
		)}>
			{props.label &&
				<span className="text-xl">
					{props.label} {props.required && <span className="text-sm text-red-500">*</span>}
				</span>
			}
			{props.type == 'rich' ? (
				<textarea
					className={cx(
						props.inputClassName,
						'p-4 rounded-md text-black'
					)}
					placeholder={props.placeholder}
					value={props.value}
					{...props.register(props.name, {required: props.required})}
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
					{...props.register(props.name, {required: props.required})}
				/>
			)}
		</div>
	);
};

export default Field;
