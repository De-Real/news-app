import { INews } from "./../types/newsInterface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface NewsState {
	fetchPage: number;
	deletedItems: string[];
	totalNews: INews[];
}

const initialState: NewsState = {
	fetchPage: 2,
	deletedItems: [],
	totalNews: [],
};

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		changeFetchPage: (state) => {
			if (state.fetchPage <= 10) {
				state.fetchPage++;
			}
		},
		deleteNewsItem: (state, action: PayloadAction<string>) => {
			state.deletedItems = [...state.deletedItems, action.payload];
		},
	},
});

export const { changeFetchPage, deleteNewsItem } = newsSlice.actions;

export const selectFetchPage = (state: RootState) => state.news.fetchPage;
export const selectDeletedItems = (state: RootState) => state.news.deletedItems;

export default newsSlice.reducer;
