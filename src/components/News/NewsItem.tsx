import { INews } from "../../types/newsInterface";
import { StyledNewsItem } from "../styles/NewsItem.styled";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../store/hooks";
import { deleteNewsItem } from "../../store/newsSlice";
import { useTranslation } from "react-i18next";

const NewsItem = ({ item }: { item: INews }) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const deleteItem = () => {
		dispatch(deleteNewsItem(item.id));
	};

	return (
		<StyledNewsItem>
			<h3>{item.title}</h3>
			<p>{item.body}</p>
			<div>
				<Button variant="contained" color="error" onClick={deleteItem}>
					{t("delete")}
				</Button>
			</div>
		</StyledNewsItem>
	);
};

export default NewsItem;
