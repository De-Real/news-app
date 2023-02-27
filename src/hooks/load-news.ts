import { useState } from "react";
import { INews } from "./../types/newsInterface";
import { selectFetchPage } from "./../store/newsSlice";
import { useAppDispatch, useAppSelector } from "./../store/hooks";
import { addNewsSlice, changeFetchPage } from "../store/newsSlice";

export const useLoadNews = () => {
	const fetchPage = useAppSelector(selectFetchPage);
	const dispatch = useAppDispatch();

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const fetchNews = async () => {
		if (+fetchPage > 10) {
			setError("Fetch page limit is 10.");
			return;
		}

		setIsLoading(true);
		setError("");

		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users/${fetchPage}/posts`
		);
		if (!response.ok) {
			console.log("ERROR", response);
			setIsLoading(false);
			setError(response.statusText);
			return;
		}

		const results = (await response.json()) as INews[];
		setIsLoading(false);
		dispatch(addNewsSlice(results));
		dispatch(changeFetchPage());
	};

	return { fetchPage, fetchNews, error, isLoading };
};
