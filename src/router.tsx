import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import CircularLoading from "./components/UI/CircularLoading";
import RootLayout from "./layout/RootLayout";
// import ErrorPage from "./pages/Error";
// import HomePage from "./pages/Home";
// import LoginPage, { action as loginAction } from "./pages/Login";
// import NewsPage, { loader as newsLoader } from "./pages/News";
// import ProfilePage from "./pages/Profile";
// import { loginStatusLoader } from "./utils/loginStatusCheck";

const ErrorPage = lazy(() => import("./pages/Error"));
const HomePage = lazy(() => import("./pages/Home"));
const NewsPage = lazy(() => import("./pages/News"));
const LoginPage = lazy(() => import("./pages/Login"));
const ProfilePage = lazy(() => import("./pages/Profile"));

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <RootLayout />,
			errorElement: (
				<Suspense fallback={<CircularLoading />}>
					<ErrorPage />
				</Suspense>
			),
			children: [
				{
					path: "/",
					element: (
						<Suspense fallback={<CircularLoading />}>
							<HomePage />
						</Suspense>
					),
				},
				{
					path: "/news",
					element: (
						<Suspense fallback={<CircularLoading />}>
							<NewsPage />
						</Suspense>
					),
					loader: () =>
						import("./pages/News").then((module) => module.loader()),
				},
				{
					path: "/profile",
					element: (
						<Suspense fallback={<CircularLoading />}>
							<ProfilePage />
						</Suspense>
					),
					loader: () =>
						import("./utils/loginStatusCheck").then((module) =>
							module.loginStatusLoader()
						),
				},
				{
					path: "/login",
					element: (
						<Suspense fallback={<CircularLoading />}>
							<LoginPage />
						</Suspense>
					),
					action: (meta) =>
						import("./pages/Login").then((module) => module.action(meta)),
				},
			],
		},
	],
	{ basename: "/news-app" }
);
