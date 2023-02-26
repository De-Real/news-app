import React from "react";
import { INews } from "../../types/newsInterface";
import { StyledNewsItem } from "../styles/StyledNewsItem.styled";
import Button from "@mui/material/Button";

const NewsItem = ({ item }: { item: INews }) => {
	return (
		<StyledNewsItem>
			<h3>{item.title}</h3>
			<p>{item.body}</p>
			<div>
				<Button variant="contained" color="error">
					Delete
				</Button>
			</div>
		</StyledNewsItem>
	);
};

export default NewsItem;
