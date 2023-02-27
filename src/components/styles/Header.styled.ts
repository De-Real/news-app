import styled from "@emotion/styled";

export const StyledHeader = styled.header`
	font-size: 24px;
	color: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 60px;
	background-color: #0a2647;

	transition: all 0.5s ease 0s;

	& a {
		color: white;
	}

	& a.active {
		color: #ccc;
		text-decoration: underline;
	}
`;

export const StyledDiv = styled.div<{ gap?: number }>`
	display: flex;
	align-items: center;
	gap: ${({ gap }) => (gap ? `${gap}px` : "15px")};
`;
