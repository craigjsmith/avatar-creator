import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export function Box(props) {
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef();
	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (ref.current.rotation.x += delta));
	// Return the view, these are regular Threejs elements expressed in JSX
	return (
		<mesh
			position={props.position}
			ref={ref}
			scale={clicked ? 1.5 : 1}
			onClick={() => {
				console.log("click!");
				props.setSelectedMeshId(props.id);
				// setColorEditorIsOpen(true);
			}}
			onPointerOver={(event) => (event.stopPropagation(), hover(true))}
			onPointerOut={(event) => hover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={props.color} />
		</mesh>
	);
}