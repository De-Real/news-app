import { memo } from "react";
import Button from "@mui/material/Button";
import NewsItem from "./NewsItem";
import { StyledNews } from "../styles/News.styled";
import { useAppSelector } from "../../store/hooks";
import { selectTotalNews } from "../../store/newsSlice";
import { useLoadNews } from "../../hooks/load-news";
import CircularLoading from "../UI/CircularLoading";

const News = () => {
	const totalNews = useAppSelector(selectTotalNews);

	const { fetchNews, fetchPage, error, isLoading } = useLoadNews();

	const hasData = totalNews.length !== 0;
	const isMaxPage = fetchPage === 10;

	const dataElement = hasData ? (
		<ul>
			{totalNews.map((newsItem) => {
				return <NewsItem key={newsItem.id} item={newsItem} />;
			})}
		</ul>
	) : (
		<p>No news found.</p>
	);

	return (
		<StyledNews>
			{dataElement}
			{isLoading && <CircularLoading />}
			{error && <p>Error occured. Reason: {error}</p>}
			{fetchPage !== 10 && (
				<Button variant="contained" onClick={fetchNews}>
					Load news
				</Button>
			)}
			{isMaxPage && !hasData && (
				<p> You have watched and deleted all available news</p>
			)}
		</StyledNews>
	);
};

export default memo(News);
