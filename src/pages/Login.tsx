import React from "react";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import Login from "../components/Login/Login";

const LoginPage = () => {
	return <Login />;
};

export default LoginPage;

export const action = async ({ request }: ActionFunctionArgs) => {
	const data = await request.formData();

	const authData = {
		login: data.get("login"),
		password: data.get("password"),
	};

	//Here in real we should have request to the server that will give us the response,
	//provide additional validation and return auth token;

	if (authData.login !== "admin" || authData.password !== "12345") {
		return { error: true };
	}

	return { error: false };
};
