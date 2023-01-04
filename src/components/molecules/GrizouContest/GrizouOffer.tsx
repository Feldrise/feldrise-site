interface IGrizouOfferProps {
	author: string
	site: string
	children: React.ReactNode
}

const GrizouOffer = (props: IGrizouOfferProps) => {
	const {author, site, children} = props;

	return (
		<div className="flex flex-col">
			<div className="flex flex-col md:flex-row md:items-center">
				<div className="px-4 py-2 mr-4 bg-primary rounded-xl">
					<h3 className="text-base text-white">Offert par {author}</h3>
				</div>
				<a className="text-primary underline" href={site} target="_blank" rel="noreferrer">Voir le site</a>
			</div>
			<div className="py-4">
				{children}
			</div>
		</div>
	);
};

export default GrizouOffer;
