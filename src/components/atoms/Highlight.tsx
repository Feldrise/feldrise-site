import React, {useEffect, useRef, useState} from 'react';
import cx from 'classnames';

interface IHighlightProps {
	children?: React.ReactNode;
}

const Highlight = (props: IHighlightProps) => {
	const [visible, setVisible] = useState<boolean>(false);
	const observedRef = useRef<HTMLSpanElement>(null);

	/*
	 * Callback of IntersactionObserver used to animate the highlighting
	 * when it is displayed on view
	 */
	const observerCallback = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries;
		if (entry.isIntersecting) {
			setVisible(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(observerCallback);
		const observedEl = observedRef.current;
		observedEl && observer.observe(observedEl);

		return () => {
			observedEl && observer.unobserve(observedEl);
		};
	});

	return (
		<span
			className={cx(
				'relative px-4 py-2 bg-secondary lg:bg-none lg:whitespace-nowrap z-0',
				'lg:before:content-[""] before:absolute before:h-full before:top-0 before:left-0',
				visible ? 'before:w-full' : 'before:w-0',
				'before:bg-secondary before:-z-10 before:transition-all before:duration-1000'
			)}
			ref={observedRef}
		>
			{props.children}
		</span>
	);
};

export default Highlight;
