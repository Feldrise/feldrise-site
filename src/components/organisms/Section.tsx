import React from 'react';
import cx from 'classnames';

interface ISectionProps {
	className?: string;
	children?: React.ReactNode;
}

const Section = (props: ISectionProps) => {
	return (
		<section className={cx(
			props.className,
			'px-[2rem] md:px-[10rem] xl:px-[20rem]'
		)}>
			{props.children}
		</section>
	);
};

export default Section;
