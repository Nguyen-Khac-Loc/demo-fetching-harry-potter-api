interface Props {
	title: string;
}

export default function Title({ title }: Props) {
	return (
		<div className="header">
			<h1>{title}</h1>
		</div>
	);
}
