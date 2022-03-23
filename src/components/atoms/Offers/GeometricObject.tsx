import React from 'react';
import {Canvas} from '@react-three/fiber';
import {PerspectiveCamera, softShadows} from '@react-three/drei';
import {MathUtils, Vector3} from 'three';
import RotatingMesh from '../RotatingMesh';

export type GeometricMeshes = 'torus' | 'cylinder';

interface IGeometricObjectProps {
	position?: Vector3;
	scale?: number;
	shadowOffsetY?: number;
	mesh?: GeometricMeshes;
}

softShadows();

const GeometricObject = ({mesh = 'torus', position = new Vector3(0, 0, 0), scale = 1, shadowOffsetY = 1.5}: IGeometricObjectProps) => {
	return (
		<Canvas shadows>
			<PerspectiveCamera
				rotation={[MathUtils.degToRad(25), 0, 0]}
			>
				<ambientLight intensity={0.3}/>
				<directionalLight
					color="white"
					position={[0, 8, 0]}
					castShadow
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					shadow-camera-far={50}
					shadow-camera-left={-10}
					shadow-camera-right={10}
					shadow-camera-top={10}
					shadow-camera-bottom={-10}
				/>
				<RotatingMesh
					position={position}
					castShadow
				>
					{mesh === 'torus' && <torusBufferGeometry args={[0.8 * scale, 0.15 * scale, 24, 64]}/>}
					{mesh === 'cylinder' && <cylinderBufferGeometry args={[0.8 * scale, 0.8 * scale, 1.5 * scale, 32]}/>}
					<meshStandardMaterial color="#AA33FF"/>
				</RotatingMesh>
				<mesh
					position={[position.x, position.y-shadowOffsetY, position.z]}
					rotation={[-Math.PI / 2, 0, 0]}
					receiveShadow={true}
				>
					<planeBufferGeometry args={[10, 10]}/>
					<shadowMaterial transparent opacity={0.5} />
				</mesh>
			</PerspectiveCamera>
		</Canvas>
	);
};

export default GeometricObject;
