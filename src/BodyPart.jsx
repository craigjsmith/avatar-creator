export function BodyPart(props) {
	return (
		<mesh
			position={props.position}
			onClick={() => {
				props.setSelectedMeshId(props.id);
				props.setColorEditorIsOpen(true);
			}}
		>
			{props.shape === "sphere" ? (
				<sphereGeometry args={props.size} />
			) : (
				<boxGeometry args={props.size} />
			)}

			<meshStandardMaterial color={props.color} />
		</mesh>
	);
}
