import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ProfilePage from "./pages/Profile";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/news",
				element: <NewsPage />,
			},
			{ path: "/profile", element: <ProfilePage /> },
		],
	},
]);
