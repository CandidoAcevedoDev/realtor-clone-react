import { createBrowserRouter, Route, Link } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";
import Offers from "../pages/Offers";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/sign-up",
				element: <SignUp />,
			},
			{
				path: "/sign-in",
				element: <SignIn />,
			},
			{
				path: "/forgot-password",
				element: <ForgotPassword />,
			},
			{
				path: "/offers",
				element: <Offers />,
			},
		],
	},
]);
