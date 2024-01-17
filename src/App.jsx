import { createRoot } from "react-dom/client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ColorPicker } from "@mantine/core";
import { Avatar } from "./Avatar";

import "./app.css";

function App() {
	const [colorEditorIsOpen, setColorEditorIsOpen] = useState(false);
	const [selectedMeshId, setSelectedMeshId] = useState(0);
	const [color, setColor] = useState(0xff00ff);
	const [color2, setColor2] = useState(0xff00ff);

	return (
		<>
			<div className="canvas">
				<ColorPicker
					format="rgba"
					value={selectedMeshId === 0 ? color : color2}
					onChange={(e) => {
						console.log(selectedMeshId);
						if (selectedMeshId == 0) {
							setColor(e);
						} else {
							setColor2(e);
						}
					}}
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
					<Avatar
						color={color}
						color2={color2}
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
