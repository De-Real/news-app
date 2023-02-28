import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import LoginPage, { action as loginAction } from "./pages/Login";
import NewsPage, { loader as newsLoader } from "./pages/News";
import ProfilePage from "./pages/Profile";
import { loginStatusLoader } from "./utils/loginStatusCheck";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
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
			{ path: "/profile", element: <ProfilePage />, loader: loginStatusLoader },
			{ path: "/login", element: <LoginPage />, action: loginAction },
		],
	},
]);
