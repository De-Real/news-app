import styled from "styled-components";

export const StyledNewsItem = styled.li`
	background-color: aliceblue;
	border: 1px solid black;
	padding: 10px 25px;
	border-radius: 5px;
	max-width: 760px;
	transition: transform 0.2s ease-out 0s;
	cursor: pointer;

	& h3 {
		font-size: 24px;
		margin-bottom: 10px;
	}

	& p {
		margin-bottom: 10px;
	}

	& div {
		text-align: right;
	}

	&:hover {
		transform: scale(1.025);
	}
`;
