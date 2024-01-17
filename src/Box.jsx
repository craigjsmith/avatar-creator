export function Box(props) {
	return (
		<mesh
			position={props.position}
			onClick={() => {
				console.log("click!");
				props.setSelectedMeshId(props.id);
				props.setColorEditorIsOpen(true);
			}}
		>
			<boxGeometry args={props.size} />
			<meshStandardMaterial color={props.color} />
		</mesh>
	);
}
