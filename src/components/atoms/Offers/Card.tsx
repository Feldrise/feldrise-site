import React from 'react';
import {Vector3} from 'three';
import GeometricObject, {GeometricMeshes} from './GeometricObject';

interface ICardProps {
	mesh?: GeometricMeshes;
	content?: React.ReactNode;
}

const Card = (props: ICardProps) => {
	return (
		<div className="relative w-[300px] h-[435px] flex flex-col justify-end rounded-3xl border-4 border-solid border-primary text-center">
			<div className="absolute w-full h-full top-0 left-O">
				<GeometricObject
					mesh={props.mesh}
					position={new Vector3(0, 1.8, 0)}
				/>
			</div>

			<div className="px-2 flex flex-col justify-between items-center z-10">
				{props.content}
			</div>
		</div>
	);
};

export default Card;
