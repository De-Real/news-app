import styled from "styled-components";

export const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& p {
		text-align: center;
		font-size: 18px;
		max-width: 500px;
		margin-bottom: 12px;
		@media (max-width: 560px) {
			font-size: 16px;
		}
	}
`;
