import React from 'react';
import {MeshProps, useFrame} from '@react-three/fiber';
import * as THREE from 'three';
import {MathUtils, Mesh} from 'three';

interface IRotatingMeshProps extends MeshProps {
	rotationSpeed?: number;
	children?: React.ReactNode;
}

const RotatingMesh = (props: IRotatingMeshProps) => {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const meshRef = React.useRef<Mesh>(null!);
	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), (props.rotationSpeed || 0.01));
		}
	});

	return (
		<mesh
			rotation={[MathUtils.degToRad(50), 0, 0]}
			ref={meshRef}
			{...props}
		>
			{props.children}
		</mesh>
	);
};

export default RotatingMesh;
