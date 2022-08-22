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
			'relative min-w-[200px] h-[290px] rounded-3xl border-2 border-solid border-primary overflow-hidden',
			props.className,
		)}>
			<Image src={props.image || '/images/me2.2.webp'} layout="fill" objectFit="cover" alt="Image portrait"/>
		</div>
	);

export default PortraitImage;
