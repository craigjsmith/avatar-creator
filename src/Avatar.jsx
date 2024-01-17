import { useRef, useState } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { BodyPart } from "./BodyPart";
import { TextureLoader, SRGBColorSpace } from "three";

export function Avatar(props) {
	let colors = props.colors;
	let setColorEditorIsOpen = props.setColorEditorIsOpen;
	let setSelectedMeshId = props.setSelectedMeshId;

	const [hover, setHover] = useState(false);

	const ref = useRef();

	// Spin
	useFrame((state, delta) => {
		// if (!hover) {
		// 	ref.current.rotation.y += delta;
		// }
	});

	const { scene } = useThree();
	const texture = useLoader(TextureLoader, "../space.jpg");
	texture.colorSpace = SRGBColorSpace;
	scene.background = texture;

	return (
		<mesh
			ref={ref}
			onPointerOver={() => {
				setHover(true);
			}}
			onPointerOut={() => setHover(false)}
		>
			<BodyPart
				id={"armLeft"}
				position={[0.75, 0, 0]}
				size={[0.25, 1.5, 0.25]}
				color={colors.armLeft}
				setSelectedMeshId={setSelectedMeshId}
				setColorEditorIsOpen={setColorEditorIsOpen}
			/>
			<BodyPart
				id={"armRight"}
				position={[-0.75, 0, 0]}
				size={[0.25, 1.5, 0.25]}
				color={colors.armRight}
				setSelectedMeshId={setSelectedMeshId}
				setColorEditorIsOpen={setColorEditorIsOpen}
			/>
			<BodyPart
				id={"legLeft"}
				position={[0.25, -1.5, 0]}
				size={[0.25, 1.5, 0.25]}
				color={colors.legLeft}
				setSelectedMeshId={setSelectedMeshId}
				setColorEditorIsOpen={setColorEditorIsOpen}
			/>
			<BodyPart
				id={"legRight"}
				position={[-0.25, -1.5, 0]}
				size={[0.25, 1.5, 0.25]}
				color={colors.legRight}
				setSelectedMeshId={setSelectedMeshId}
				setColorEditorIsOpen={setColorEditorIsOpen}
			/>
			<BodyPart
				id={"body"}
				position={[0, 0, 0]}
				size={[1, 1.5, 1]}
				color={colors.body}
				setSelectedMeshId={setSelectedMeshId}
				setColorEditorIsOpen={setColorEditorIsOpen}
			/>
			<BodyPart
				shape={"sphere"}
				id={"head"}
				position={[0, 1.4, 0]}
				size={[0.5, 32, 16]}
				color={colors.head}
				setSelectedMeshId={setSelectedMeshId}
				setColorEditorIsOpen={setColorEditorIsOpen}
			/>
		</mesh>
	);
}
