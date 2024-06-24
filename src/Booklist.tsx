import Book from "./Book";
import { IBook } from "./book.model";

interface Props {
	books: IBook[];
	removeBookFn(id: string): void;
}
export default function Booklist({ books, removeBookFn }: Props) {
	// const [options, setOptions] = useState(false);
	return (
		<>
			{/* <div className="btn-container" >
				<h1
					style={{
						textAlign: "center",
					}}
				>
					show all books?
				</h1>
				<button
					className="btn btn-opt"
					onClick={() => setOptions(!options)}
				>
					Yes
				</button>
				<button className="btn btn-opt">No, display one by one</button>
			</div>
			{options ? (
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
			) : null} */}
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
		</>
	);
}
