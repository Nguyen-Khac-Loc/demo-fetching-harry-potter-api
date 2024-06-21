import { useEffect, useState } from "react";
import Booklist from "./Booklist";

export interface IBook {
	serial: string;
	title: string;
	cover: string;
	summary: string;
}
const url = "https://potterhead-api.vercel.app/api/books";
function App() {
	const [books, setBooks] = useState<IBook[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	async function fetchBook() {
		const response = await fetch(url);
		const books = await response.json();
		setBooks(books);
		setIsLoading(false);
	}
	useEffect(() => {
		fetchBook();
	}, []);

	return (
		<>
			<div className="header">
				<h1>HARRY POTTER BOOKS API</h1>
			</div>
			{!isLoading ? (
				<Booklist books={books} />
			) : (
				<h1
					style={{
						textAlign: "center",
					}}
				>
					Loading...😋😋😋
				</h1>
			)}
		</>
	);
}

export default App;
