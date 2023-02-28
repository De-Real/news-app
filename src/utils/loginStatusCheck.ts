import { redirect } from "react-router-dom";

export const loginStatusLoader = () => {
	const status = localStorage.getItem("loggedIn");

	if (!status) {
		return redirect("/login");
	}

	if (!JSON.parse(status as string)) {
		return redirect("/login");
	}

	return null;
};
