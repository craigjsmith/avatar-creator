import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "./box";

export function Avatar(props) {
	let color1 = props.color;
	let color2 = props.color2;
	let setColorEditorIsOpen = props.setColorEditorIsOpen;
	let setSelectedMeshId = props.setSelectedMeshId;

	return (
		<>
			<Box
				id={0}
				position={[-1.2, 0, 0]}
				color={color1}
				setSelectedMeshId={setSelectedMeshId}
			/>
			<Box
				id={1}
				position={[1.2, 0, 0]}
				color={color2}
				setSelectedMeshId={setSelectedMeshId}
			/>
		</>
	);
}
