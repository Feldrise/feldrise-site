import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons';

interface IValueProps {
	content: string;
}

const Value = (props: IValueProps) => {
	return (
		<div className="flex items-center gap-4">
			<FontAwesomeIcon icon={faSquareCheck} className="w-[32px] h-[32px] text-primary"/>
			<p className="w-full p-8 bg-primary rounded-xl">
				{props.content}
			</p>
		</div>
	);
};

export default Value;
