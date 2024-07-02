import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// Define the type for the items in the data array
interface ItemType {
	serial: string;
}
const useFetch = <T extends ItemType[]>(
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
			const data = await response.json();
			setData(data);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
		toast.success("Fetching completed. 😋");
	}
	//bug khi xoá phần tử cuối đầu tiên lúc đang hiển thị one by one
	function remove(id: string) {
		if (!data) return toast.error("Something when wrong! 🤯");
		const newList = data.filter((item) => item.serial !== id);
		setData(newList as T);
	}
	return [isLoading, data, fetchData, remove];
};
export default useFetch;
