import styled from "@emotion/styled";

export const StyledHeader = styled.header`
	font-size: 24px;
	padding: 0 100px;
	color: white;
	display: flex;
	align-items: center;
	gap: 20px;
	height: 60px;
	background-color: #0a2647;
	transition: all 0.5s ease 0s;

	& div {
		display: flex;
		gap: 10px;
	}

	/* & :first-child {
		flex: 1 1 auto;
		& a {
			
		}
	}
	& :last-child {
		flex: 0 0 300px;
	} */

	& a {
		color: white;
	}
`;

// export const StyledDiv = styled.div<{ gap?: number }>``;

export const StyledDiv = styled.div<{ gap?: number }>`
	display: flex;
	align-items: center;

	&.first {
		flex: 1 1 auto;
		gap: ${({ gap }) => (gap ? `${gap}px` : "15px")};
		& a {
			display: block;
			min-width: 120px;
			text-align: center;
		}
		& a.active {
			color: #ccc;
			text-decoration: underline;
		}
	}
	&.second {
		flex: 0 0 300px;
		gap: ${({ gap }) => (gap ? `${gap}px` : "15px")};
	}
`;
