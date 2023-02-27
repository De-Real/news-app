import LinearLoading from "../components/UI/LinearLoading";
import HeaderNavigation from "../layout/HeaderNavigation";
import { useRouteError } from "react-router-dom";
import { StyledErrorWrapper } from "./styles/Error.styled";

const ErrorPage = () => {
	const error = useRouteError() as {
		data: { message: string };
		statusText: string;
		status: string;
	};
	console.log(error);
	return (
		<>
			<HeaderNavigation />
			<LinearLoading />
			<StyledErrorWrapper>
				<h3>{error.data.message}</h3>
				<p>Error occured. Reason: {error.statusText}</p>
				<p>If error persists, please, contact with administrator:</p>
				<p>
					<strong>example.ex@sample.org.com</strong>
				</p>
			</StyledErrorWrapper>
		</>
	);
};

export default ErrorPage;
