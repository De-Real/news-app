import React from "react";
import { json, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { newsURL } from "../api/urls";
import News from "../components/News/News";
import { INews } from "../types/newsInterface";

const NewsPage = () => {
	const news = useLoaderData() as INews[];

	return (
		<>
			<h2> News</h2>
			<News news={news} />
		</>
	);
};

export default NewsPage;

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const response = await fetch(newsURL);

	if (!response.ok)
		throw json(
			{ message: "Could not fetch news." },
			{ status: response.status, statusText: response.statusText }
		);

	return response;
};
