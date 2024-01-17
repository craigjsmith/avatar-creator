import { MathUtils } from "three";

export function Stars(props) {
	const createRandomStar = (index) => {
		const [x, y, z] = Array(3)
			.fill()
			.map(() => MathUtils.randFloatSpread(100));

		return (
			<mesh position={[x, y, z]} key={index}>
				<sphereGeometry args={[0.25, 24, 24]} />
				<meshStandardMaterial color={0xffffff} />
			</mesh>
		);
	};

	const stars = Array.from({ length: 100 }, (_, index) =>
		createRandomStar(index)
	);

	return <>{stars}</>;
}
