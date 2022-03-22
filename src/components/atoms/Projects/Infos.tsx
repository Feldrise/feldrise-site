import React from 'react';
import cx from 'classnames';

interface IInfo {
	name: string;
	value: string;
}

interface IInfosProps {
	content: IInfo[];
	className?: string;
}

const Infos = (props: IInfosProps) => {
	return (
		<div className={cx(
			'table text-xl',
			props.className
		)}>
			{props.content.map((info, index) =>
				<div className="table-row" key={index}>
					<div className="pr-8 py-1 table-cell font-bold border-r border-solid border-white">{info.name}</div>
					<div className="pl-8 py-1 table-cell">{info.value}</div>
				</div>
			)}
		</div>
	);
};

export default Infos;
