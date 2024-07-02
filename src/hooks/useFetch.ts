import { useEffect, useState } from "react";

const useFetch = <T>(
	url: string
): [boolean, T | undefined, () => void, (id: string) => void] => {
	const [data, setData] = useState<T>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);
	async function fetchData() {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const books = await response.json();
			setData(books);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	}
	//bug khi xoá phần tử cuối đầu tiên lúc đang hiển thị one by one
	function remove(id: string) {
		const newList = data.filter((item) => item.serial !== id);
		setData(newList);
		return;
	}

	return [isLoading, data, fetchData, remove];
};
export default useFetch;
