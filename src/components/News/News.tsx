import { useState } from "react";
import { INews } from "../../types/newsInterface";

import Button from "@mui/material/Button";
import NewsItem from "./NewsItem";
import { StyledNews } from "../styles/StyledNews.styled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeFetchPage, selectFetchPage } from "../../store/newsSlice";

const News = ({ news }: { news: INews[] }) => {
	const [totalNews, setTotalNews] = useState(news);

	const fetchPage = useAppSelector(selectFetchPage);
	const dispatch = useAppDispatch();

	//When goto home and back news are cleaned, need to fix it by passing totalNews in global state
	const fetchData = async () => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users/${fetchPage}/posts`
		);
		if (!response.ok) {
			console.log("ERROR", response);
			return;
		}

		const results = (await response.json()) as INews[];

		console.log(results);
		setTotalNews((currentNews) => [...currentNews, ...results]);
		dispatch(changeFetchPage());
	};

	return (
		<StyledNews>
			<ul>
				{totalNews.map((newsItem) => {
					return <NewsItem key={newsItem.id} item={newsItem} />;
				})}
			</ul>
			{fetchPage !== 10 && (
				<Button variant="contained" onClick={fetchData}>
					Upload news
				</Button>
			)}
		</StyledNews>
	);
};

export default News;
