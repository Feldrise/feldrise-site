import React from 'react';
import {useGLTF} from '@react-three/drei';
import {MeshProps} from '@react-three/fiber';
import {Material, Mesh} from 'three';
import {GLTF} from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResults = GLTF & {
	nodes: Record<string, Mesh>
	materials: Record<string, Material>
}

const RoundedCylinder = (props: MeshProps) => {
	const {nodes, materials} = useGLTF('models/rounded_cylinder.gltf') as GLTFResults;

	return <mesh {...props} geometry={nodes.Cylinder.geometry} material={materials.material} />;
};

export default RoundedCylinder;

useGLTF.preload('models/rounded_cylinder.gltf');
