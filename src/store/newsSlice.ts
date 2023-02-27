import { INews } from "./../types/newsInterface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface NewsState {
	fetchPage: number;
	deletedItems: string[];
	totalNews: INews[];
	isInitial: boolean;
}

const initialState: NewsState = {
	fetchPage: 2,
	deletedItems: [],
	totalNews: [],
	isInitial: true,
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
		// deleteNewsItem: (state, action: PayloadAction<string>) => {
		// 	state.deletedItems = [...state.deletedItems, action.payload];
		// },
		addNewsSlice: (state, action: PayloadAction<INews[]>) => {
			state.totalNews = [...state.totalNews, ...action.payload];
		},

		changeInitial: (state) => {
			state.isInitial = false;
		},

		deleteNewsItem: (state, action: PayloadAction<number>) => {
			state.totalNews = state.totalNews.filter(
				(newsItem) => newsItem.id !== action.payload
			);
		},
	},
});

export const { changeFetchPage, deleteNewsItem, addNewsSlice, changeInitial } =
	newsSlice.actions;

export const selectFetchPage = (state: RootState) => state.news.fetchPage;
export const selectDeletedItems = (state: RootState) => state.news.deletedItems;
export const selectTotalNews = (state: RootState) => state.news.totalNews;
export const selectIsInitial = (state: RootState) => state.news.isInitial;

export default newsSlice.reducer;
