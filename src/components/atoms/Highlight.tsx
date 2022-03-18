import React from 'react';

interface IHighlightProps {
	children?: React.ReactNode;
}

const Highlight = (props: IHighlightProps) => {
	return (
		<span className="relative px-4 py-2 bg-secondary whitespace-nowrap">
			{props.children}
		</span>
	);
};

export default Highlight;
