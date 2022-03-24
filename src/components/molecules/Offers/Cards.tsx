import React from 'react';
import Card from '../../atoms/Offers/Card';
import Button from '../../atoms/Button';

const Cards = () => {
	return (
		<>
			<Card
				mesh="torus"
				content={(
					<>
						<div>
							<h3 className="mb-2">Activité 1</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
						<Button className="!w-full my-4 px-0" href="/offers">Voir les offres</Button>
					</>
				)}
			/>
			<Card
				mesh="cylinder"
				content={(
					<>
						<div>
							<h3 className="mb-2">Activité 1</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
						<Button className="!w-full my-4 px-0" href="/offers">Voir les offres</Button>
					</>
				)}
			/>
		</>
	);
};

export default Cards;
