import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import LinearLoading from "../components/UI/LinearLoading";
const RootLayout = () => {
	return (
		<>
			<HeaderNavigation />
			<LinearLoading />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
