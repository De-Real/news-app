import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface LoginState {
	isLoggedIn: boolean;
}

const initialState: LoginState = {
	isLoggedIn: false,
};

if (localStorage.getItem("loggedIn")) {
	initialState.isLoggedIn = JSON.parse(
		localStorage.getItem("loggedIn") as string
	);
}

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		logIn: (state) => {
			state.isLoggedIn = true;
			localStorage.setItem("loggedIn", "true");
		},
		logOut: (state) => {
			state.isLoggedIn = false;
			localStorage.setItem("loggedIn", "false");
		},
	},
});

export const { logIn, logOut } = loginSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.login.isLoggedIn;

export default loginSlice.reducer;
