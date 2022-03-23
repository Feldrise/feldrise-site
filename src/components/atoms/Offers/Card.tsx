import React from 'react';
import {Vector3} from 'three';
import Button from '../Button';
import GeometricObject from './GeometricObject';


const Card = () => {
	return (
		<div className="relative w-[300px] h-[435px] rounded-3xl border-4 border-solid border-primary text-center">
			<div className="h-1/2">
				<div className="absolute w-full h-full top-0 left-O">
					<GeometricObject
						position={new Vector3(0, 1.8, 0)}
					/>
				</div>
			</div>

			<div className="flex-1 flex flex-col justify-between">
				<div>
					<h3 className="mb-2">Activité 1</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<Button>Voir les offres</Button>
			</div>

		</div>
	);
};

export default Card;
