export function Sphere(props) {
	return (
		<mesh
			position={props.position}
			onClick={() => {
				console.log("click!");
				props.setSelectedMeshId(props.id);
				props.setColorEditorIsOpen(true);
			}}
		>
			<sphereGeometry args={props.size} />
			<meshStandardMaterial color={props.color} />
		</mesh>
	);
}
