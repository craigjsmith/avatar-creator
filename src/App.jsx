import { createRoot } from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ColorPicker, Button } from "@mantine/core";
import { Avatar } from "./Avatar";
import { TextureLoader } from "three";

import "./app.css";
import { Stars } from "./Stars";
import { Satellite } from "./Satellite";

function App() {
	const [colorEditorIsOpen, setColorEditorIsOpen] = useState(false);
	const [selectedMeshId, setSelectedMeshId] = useState();
	const [colors, setColors] = useState({
		armLeft: "#00ff00",
		armRight: "#00ff00",
		legLeft: "#ff0000",
		legRight: "#ff0000",
		body: "#0000ff",
		head: "#ffff00",
	});

	const [stars, _setStars] = useState(<Stars />);

	return (
		<>
			<div className="canvas">
				{colorEditorIsOpen ? (
					<div className="colorPickerContainer">
						<div className="colorPicker">
							<ColorPicker
								value={colors[selectedMeshId]}
								onChange={(e) => {
									let newColors = { ...colors };
									newColors[selectedMeshId] = e;
									setColors(newColors);
								}}
							/>
							<Button
								variant="filled"
								onClick={() => {
									setColorEditorIsOpen(false);
								}}
								className="colorPickerCloseButton"
							>
								Close
							</Button>
						</div>
					</div>
				) : undefined}

				<Canvas>
					<ambientLight intensity={Math.PI / 2} />
					<OrbitControls />
					{/* <gridHelper /> */}
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
					<Avatar
						colors={colors}
						setColorEditorIsOpen={setColorEditorIsOpen}
						setSelectedMeshId={setSelectedMeshId}
					/>
					<Satellite />
					{stars}
				</Canvas>
			</div>
		</>
	);
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
