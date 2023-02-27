import styled from "styled-components";

export const StyledNews = styled.div`
	text-align: center;

	& ul {
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin: 10px 0;
	}

	& p {
		font-size: 24px;
		margin-bottom: 12px;
	}
`;
