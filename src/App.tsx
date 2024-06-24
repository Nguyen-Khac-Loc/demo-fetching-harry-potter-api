import { useEffect, useState } from "react";
import Booklist from "./Booklist";
import { IBook } from "./book.model";
import Loading from "./core/Loading";
import Refresh from "./core/Refresh";
import Title from "./core/Title";

const url = "https://potterhead-api.vercel.app/api/books";
function App() {
	const [books, setBooks] = useState<IBook[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isShowAll, setIsShowAll] = useState(true);

	useEffect(() => {
		fetchBook();
	}, []);
	async function fetchBook() {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const books = await response.json();
			setBooks(books);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	}
	//bug khi xoá phần tử cuối đầu tiên lúc đang hiển thị one by one
	function removeBook(id: string) {
		const newList = books.filter((book) => book.serial !== id);
		setBooks(newList);
	}

	if (isLoading) return <Loading />;
	if (books.length === 0) return <Refresh refresh={fetchBook} />;
	return (
		<>
			<Title title="harry potter books api" />
			<div className="btn-container">
				<button
					type="button"
					className="btn-opt btn"
					onClick={() => setIsShowAll(true)}
				>
					all
				</button>
				<button
					type="button"
					className="btn-opt btn"
					onClick={() => setIsShowAll(false)}
				>
					one by one
				</button>
			</div>
			<Booklist
				books={books}
				removeBookFn={removeBook}
				isShowAll={isShowAll}
			/>
		</>
	);
}

export default App;
