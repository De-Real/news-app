import styled from "@emotion/styled";
import { Form } from "react-router-dom";

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 25px;
	flex: 0 0 425px;
	padding: 15px 0;

	& p {
		color: red;
	}

	@media (max-width: 768px) {
		flex: 0 1 420px;
	}
`;

export const StyledLoginWrapper = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	& div {
		font-size: 20px;
		& span {
			text-decoration: underline;
			font-style: italic;
		}
	}
`;
