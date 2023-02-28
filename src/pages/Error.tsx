import LinearLoading from "../components/UI/LinearLoading";
import HeaderNavigation from "../layout/HeaderNavigation";
import { useRouteError } from "react-router-dom";
import { StyledErrorWrapper } from "./styles/Error.styled";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
	const { t } = useTranslation();
	const { data, statusText } = useRouteError() as {
		data: { message: string };
		statusText: string;
		status: string;
	};
	console.log(data, statusText);
	return (
		<>
			<HeaderNavigation />
			<LinearLoading />
			<StyledErrorWrapper>
				<h3>{data.message}</h3>
				<p>{t("error", { statusText })}</p>
				<p>{t("error_desc")}</p>
				<p>
					<strong>example.ex@sample.org.com</strong>
				</p>
			</StyledErrorWrapper>
		</>
	);
};

export default ErrorPage;
