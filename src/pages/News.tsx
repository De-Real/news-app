import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { json, useLoaderData } from "react-router-dom";
import { newsURL } from "../api/urls";
import News from "../components/News/News";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
	addNewsSlice,
	changeInitial,
	selectIsInitial,
} from "../store/newsSlice";
import { INews } from "../types/newsInterface";

const NewsPage = () => {
	const isInitial = useAppSelector(selectIsInitial);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const news = useLoaderData() as INews[];
	useEffect(() => {
		if (isInitial && news) {
			dispatch(changeInitial());
			dispatch(addNewsSlice(news));
		}
	}, [news, dispatch, isInitial]);

	return (
		<>
			<h2>{t("news")}</h2>
			<News />
		</>
	);
};

export default NewsPage;

export const loader = async () => {
	const response = await fetch(newsURL);

	if (!response.ok)
		throw json(
			{ message: "Could not fetch news." },
			{ status: response.status, statusText: response.statusText }
		);

	return response;
};
