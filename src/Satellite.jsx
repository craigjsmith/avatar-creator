import { useRef, useState } from "react";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";

export function Satellite(props) {
	const radius = 25;

	const [angle, setAngle] = useState(129);
	const [x, setX] = useState(radius * Math.cos(angle));
	const [y, setY] = useState(0);
	const [z, setZ] = useState(radius * Math.sin(angle));
	const ref = useRef();

	const map = useLoader(TextureLoader, "./jupiter.jpg");

	// Spin
	useFrame((state, delta) => {
		setX(radius * Math.cos(angle));
		setZ(radius * Math.sin(angle));

		ref.current.position.set(x, y, z);

		setAngle((currentAngle) => currentAngle + 0.005);
	});

	return (
		<mesh position={[x, y, z]} ref={ref}>
			<sphereGeometry args={[3, 24, 24]} />
			<meshStandardMaterial map={map} />
		</mesh>
	);
}
