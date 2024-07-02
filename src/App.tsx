import { useState } from "react";
import Booklist from "./Booklist";
import { IBook } from "./book.model";
import Loading from "./core/Loading";
import Refresh from "./core/Refresh";
import Title from "./core/Title";
import useFetch from "./hooks/useFetch";
import { ToastContainer } from "react-toastify";
const url = "https://potterhead-api.vercel.app/api/books";
function App() {
	const [isShowAll, setIsShowAll] = useState(true);
	const [isLoading, data, fetch, remove] = useFetch<IBook[]>(url);

	if (isLoading) return <Loading />;
	if (!data) return <h2>No data found!</h2>;
	if (data.length === 0) return <Refresh refresh={fetch} />;
	return (
		<>
			<ToastContainer position="top-center" />

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
				books={data}
				removeBookFn={remove}
				isShowAll={isShowAll}
			/>
		</>
	);
}

export default App;
