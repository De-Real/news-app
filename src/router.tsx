import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NewsPage, { loader as newsLoader } from "./pages/News";
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
				loader: newsLoader,
			},
			{ path: "/profile", element: <ProfilePage /> },
			{ path: "/login", element: <LoginPage /> },
		],
	},
]);
