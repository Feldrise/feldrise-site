import React from 'react';
import cx from 'classnames';

interface IOfferCardProps {
	image: string
	title: string
	price: string
	children: React.ReactNode
}

/**
 * The card to show an offer
 * @param {IOfferCardProps} props The props of the offer
 * @return {JSX.Element} The component of the card
 */
export default function OfferCard(props: IOfferCardProps): JSX.Element {
	const className = cx('flex flex-col items-center justify-end min-h-[200px] bg-cover bg-center h-10 p-4', props.image);
	return (
		<article className='w-full h-full grow border border-primary rounded-md'>
			{/* L'image de l'offre */}
			<div className={className}>
				<h3 className='text-2xl bg-neutral py-2 px-4 rounded-md'>{props.title}</h3>
			</div>
			<div className='p-6 flex flex-col gap-4'>
				<p className='text-secondary'>{props.price}</p>
				{props.children}
			</div>
		</article>
	);
}
