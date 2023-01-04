import React from 'react';

interface IFieldGroupProps {
	children?: React.ReactNode;
}

const FieldGroup = (props: IFieldGroupProps) => {
	return (
		<div className="w-full flex flex-col lg:flex-row gap-4">
			{props.children}
		</div>
	);
};

export default FieldGroup;
