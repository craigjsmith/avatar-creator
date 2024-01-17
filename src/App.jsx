import { createRoot } from "react-dom/client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ColorPicker, Button } from "@mantine/core";
import { Avatar } from "./Avatar";

import "./app.css";

function App() {
	const [colorEditorIsOpen, setColorEditorIsOpen] = useState(false);
	const [selectedMeshId, setSelectedMeshId] = useState();
	const [colors, setColors] = useState({
		armLeft: "#ff0000",
		armRight: "#00ff00",
		legLeft: "#0000ff",
		legRight: "#ffff00",
		body: "#ff00ff",
		head: "#00ffff",
	});

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
				</Canvas>
			</div>
		</>
	);
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
