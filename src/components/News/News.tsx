import { memo } from "react";
import Button from "@mui/material/Button";
import NewsItem from "./NewsItem";
import { StyledNews } from "../styles/News.styled";
import { useAppSelector } from "../../store/hooks";
import { selectTotalNews } from "../../store/newsSlice";
import { useLoadNews } from "../../hooks/load-news";
import CircularLoading from "../UI/CircularLoading";
import { useTranslation } from "react-i18next";

const News = () => {
	const totalNews = useAppSelector(selectTotalNews);
	const { t } = useTranslation();

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
		<p>{t("no_news")}</p>
	);

	return (
		<StyledNews>
			{dataElement}
			{isLoading && <CircularLoading />}
			{error && <p>{t("load_news_error", error)}</p>}
			{fetchPage !== 10 && (
				<Button variant="contained" onClick={fetchNews}>
					{t("load_news")}
				</Button>
			)}
			{isMaxPage && !hasData && <p> {t("no_more")}</p>}
		</StyledNews>
	);
};

export default memo(News);
