import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

interface IPortraitImageProps {
	image?: string;
    className?: string;
}

/**
 * The image side to a review of Feldrise
 * @param {IPortraitImageProps} props The information of the image
 * @return {JSX.Element} The component of the image
 */
export default function PortraitImage(props: IPortraitImageProps): JSX.Element {
	return (
		<div className={cx(
			'relative min-w-[200px] h-[290px] rounded-3xl border-2 border-solid border-primary overflow-hidden',
			props.className,
		)}>
			<Image src={props.image || '/images/me2.2.webp'} layout="fill" objectFit="cover" alt="Image portrait"/>
		</div>
	);
}
