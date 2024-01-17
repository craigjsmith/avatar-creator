import { createRoot } from "react-dom/client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ColorPicker } from "@mantine/core";

import "./app.css";

function App() {
	const [colorEditorIsOpen, setColorEditorIsOpen] = useState(false);
	const [selectedMeshId, setSelectedMeshId] = useState();
	const [color, setColor] = useState(0xff00ff);
	const [color2, setColor2] = useState(0xff00ff);

	function Box(props) {
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
					setSelectedMeshId(props.id);
					setColorEditorIsOpen(true);
				}}
				onPointerOver={(event) => (event.stopPropagation(), hover(true))}
				onPointerOut={(event) => hover(false)}
			>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={props.color} />
			</mesh>
		);
	}

	return (
		<>
			<div className="canvas">
				<ColorPicker
					format="rgba"
					value={color}
					onChange={selectedMeshId == 0 ? setColor : setColor2}
				/>

				<Canvas>
					<ambientLight intensity={Math.PI / 2} />
					<spotLight
						position={[10, 10, 10]}
						angle={0.15}
						penumbra={1}
						decay={0}
						intensity={Math.PI}
					/>
					<pointLight
						position={[-10, -10, -10]}
						decay={0}
						intensity={Math.PI}
					/>
					<Box id={0} position={[-1.2, 0, 0]} color={color} />
					<Box id={1} position={[1.2, 0, 0]} color={color2} />
				</Canvas>
			</div>
		</>
	);
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
