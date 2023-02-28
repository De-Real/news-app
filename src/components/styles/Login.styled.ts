import styled from "@emotion/styled";
import { Form } from "react-router-dom";

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 25px;
	width: 425px;
	padding: 15px 0;

	& p {
		color: red;
	}
`;

export const StyledLoginWrapper = styled.article`
	text-align: center;
	& div {
		font-size: 20px;
		& span {
			text-decoration: underline;
			font-style: italic;
		}
	}
`;
