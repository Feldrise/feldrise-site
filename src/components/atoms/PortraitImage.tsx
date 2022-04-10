import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

interface IPortraitImageProps {
	image?: string;
    className?: string;
}

const PortraitImage = (props: IPortraitImageProps) =>
	(
		<div className={cx(
			'relative min-w-[300px] h-[435px] rounded-3xl border-2 border-solid border-primary overflow-hidden',
			props.className,
		)}>
			<Image src={props.image || '/images/me.jpg'} layout="fill" objectFit="cover" alt="Image portrait"/>
		</div>
	);

export default PortraitImage;
