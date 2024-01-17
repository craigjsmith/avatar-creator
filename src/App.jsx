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

import { IconBrandGithub } from "@tabler/icons-react";

function App() {
	const [cameraFirstMoved, setCameraFirstMoved] = useState(false);
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

	let partsReadableNames = {
		armLeft: "Left Arm",
		armRight: "Right Arm",
		legLeft: "Left Leg",
		legRight: "Right Leg",
		body: "Body",
		head: "Head",
	};

	const [stars, _setStars] = useState(<Stars />);

	return (
		<>
			<div className="gitLinkContainer">
				<IconBrandGithub style={{ width: 20, height: 20 }} stroke={1.5} />
				<a
					href="https://github.com/craigjsmith/avatar-creator"
					target="_blank"
					className="gitLink"
				>
					Source code
				</a>
			</div>
			<div className="canvas">
				{colorEditorIsOpen ? (
					<div className="colorPickerContainer">
						<div className="colorPicker">
							<h1>{`Edit ${partsReadableNames[selectedMeshId]}`}</h1>
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
				) : (
					<div className="messageContainer">
						{!cameraFirstMoved
							? "Drag the mouse to move camera"
							: "Click on a body part to customize"}
					</div>
				)}

				<Canvas>
					<ambientLight intensity={Math.PI / 2} />
					<OrbitControls
						onChange={() => {
							setCameraFirstMoved(true);
						}}
					/>
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
