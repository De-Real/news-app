import styled from "styled-components";

export const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& h2 {
		font-size: 36px;
		font-weight: 700;
	}

	& p {
		text-align: center;
		font-size: 18px;
		max-width: 500px;
		margin-bottom: 12px;
	}
`;
