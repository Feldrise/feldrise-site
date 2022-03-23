import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

interface IPortraitImageProps {
    className?: string;
}

const PortraitImage = (props: IPortraitImageProps) => {
	return (
		<div className={cx(
			'relative min-w-[300px] h-[435px] rounded-3xl border-2 border-solid border-primary overflow-hidden',
			props.className
		)}>
			<Image src="/images/portrait.jpeg" layout="fill" objectFit="cover" alt="Image portrait"/>
		</div>
	);
};

export default PortraitImage;
