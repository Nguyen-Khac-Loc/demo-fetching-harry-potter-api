import { IBook } from "./App";
import Book from "./Book";

interface Props {
	books: IBook[];
}
export default function Booklist({ books }: Props) {
	return (
		<section className="booklist">
			{books.map((book) => {
				return (
					<Book
						key={book.serial}
						{...book}
					/>
				);
			})}
		</section>
	);
}
