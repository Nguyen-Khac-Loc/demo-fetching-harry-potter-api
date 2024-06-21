import Book from "./Book";
import { IBook } from "./book.model";

interface Props {
	books: IBook[];
	removeBookFn(id: string): void;
}
export default function Booklist({ books, removeBookFn }: Props) {
	return (
		<section className="booklist">
			{books.map((book) => {
				return (
					<Book
						key={book.serial}
						book={book}
						removeBookFn={removeBookFn}
					/>
				);
			})}
		</section>
	);
}
