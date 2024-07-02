import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Book from "./Book";
import { IBook } from "./book.model";

interface Props {
	books: IBook[] | undefined;
	removeBookFn(id: string): void;
	isShowAll: boolean;
}
export default function Booklist({ books, removeBookFn, isShowAll }: Props) {
	const [index, setIndex] = useState(0);
	const booksCount = books!.length;
	const onNext = () => {
		setIndex((index + 1) % booksCount);
	};
	const onPrev = () => {
		setIndex((index - 1 + booksCount) % booksCount);
	};
	return (
		<>
			{isShowAll ? (
				<section className="booklist">
					{books!.map((book) => {
						return (
							<Book
								key={book.serial}
								book={book}
								removeBookFn={removeBookFn}
							/>
						);
					})}
				</section>
			) : (
				<section className="one-book">
					<button
						type="button"
						onClick={onPrev}
						className="info-btn"
					>
						<FaChevronLeft />
					</button>
					<Book
						key={books![index].serial}
						book={books![index]}
						removeBookFn={removeBookFn}
					/>
					<div className="btn-container "></div>
					<button
						type="button"
						onClick={onNext}
						className="info-btn"
					>
						<FaChevronRight />
					</button>
				</section>
			)}
		</>
	);
}
