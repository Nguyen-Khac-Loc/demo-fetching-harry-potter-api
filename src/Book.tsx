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
			<h4>
				{toggle ? summary : `${summary.substring(0, 220)}...`}
				<button
					type="button"
					className="info-btn"
					onClick={() => setToggle(!toggle)}
				>
					{toggle ? "show less" : "read more"}
				</button>
			</h4>

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
