import React, {CSSProperties, ForwardedRef} from 'react';
import cx from 'classnames';

interface ISectionProps {
	className?: string;
	children?: React.ReactNode;
	style?: CSSProperties;
}

const Section = React.forwardRef((props: ISectionProps, ref: ForwardedRef<HTMLElement>) => (
	<section className={cx(
		props.className,
		'px-[2rem] md:px-[10rem] xl:px-[20rem]',
	)} style={props.style} ref={ref}>
		{props.children}
	</section>
));
Section.displayName = 'Section';

export default Section;
