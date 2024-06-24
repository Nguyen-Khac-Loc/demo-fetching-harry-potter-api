import Title from "./Title";
interface Props {
	refresh(): void;
}
export default function Refresh({ refresh }: Props) {
	return (
		<article>
			<Title title="There are no books left 🤯😥" />
			<button
				type="button"
				onClick={refresh}
				className="btn"				
			>
				Refresh
			</button>
		</article>
	);
}
