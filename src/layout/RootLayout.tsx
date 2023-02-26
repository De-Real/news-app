import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";

const RootLayout = () => {
	return (
		<>
			<HeaderNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
