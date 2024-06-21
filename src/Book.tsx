import { IBook } from "./App";

export default function Book({ cover, title, summary, serial }: IBook) {
	return (
		<article className="book">
			<img
				src={cover}
				alt={title}
			/>
			<span className="number">{serial}</span>
			<h2>{title}</h2>
			<h4>{summary}</h4>
		</article>
	);
}
