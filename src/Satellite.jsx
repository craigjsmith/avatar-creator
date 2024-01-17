import { useRef, useState } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";

export function Satellite(props) {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [z, setZ] = useState(0);
	const [angle, setAngle] = useState(0);

	const ref = useRef();

	const radius = 10;

	// Spin
	useFrame((state, delta) => {
		setX(radius * Math.cos(angle));
		setZ(radius * Math.sin(angle));

		ref.current.position.set(x, y, z);

		setAngle((currentAngle) => currentAngle + 0.01);
	});

	return (
		<mesh position={[x, y, z]} ref={ref}>
			<sphereGeometry args={[0.25, 24, 24]} />
			<meshStandardMaterial color={0x00ff00} />
		</mesh>
	);
}
