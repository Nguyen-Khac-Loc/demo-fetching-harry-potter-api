import { useState } from "react";
import { IBook } from "./book.model";

interface Props {
	book: IBook;
	removeBookFn(id: string): void;
}
export default function Book({ book, removeBookFn }: Props) {
	const [toggle, setToggle] = useState(false);
	const { cover, title, summary, serial } = book;
	return (
		<article className="book">
			<img
				src={cover}
				alt={title}
			/>
			<span className="number">{serial}</span>
			<h2>{title}</h2>
			{toggle ? (
				<h4>{summary}</h4>
			) : (
				<h4 className="hide-info">{summary}</h4>
			)}

			<button
				type="button"
				className="info-btn"
				onClick={() => setToggle(!toggle)}
			>
				Read more
			</button>
			<button
				type="button"
				className="btn"
				onClick={() => removeBookFn(serial)}
			>
				Not interested
			</button>
		</article>
	);
}
