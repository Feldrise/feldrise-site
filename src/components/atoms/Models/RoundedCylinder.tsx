import React from 'react';
import {useGLTF} from '@react-three/drei';
import {MeshProps} from '@react-three/fiber';

const RoundedCylinder = (props: MeshProps) => {
	const {nodes, materials} = useGLTF('models/rounded_cylinder.gltf');

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return <mesh {...props} geometry={nodes.Cylinder.geometry} material={materials.material} />;
};

export default RoundedCylinder;

useGLTF.preload('models/rounded_cylinder.gltf');
