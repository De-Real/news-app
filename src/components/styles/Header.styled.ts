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

	@media (max-width: 992px) {
		padding: 0 50px;
	}

	@media (max-width: 768px) {
		padding: 0 25px;
		font-size: 20px;
		gap: 10px;
	}

	@media (max-width: 560px) {
		flex-wrap: wrap;
		height: 85px;
		gap: 5px;
		justify-content: center;
	}

	& div {
		display: flex;
		gap: 10px;
	}

	& a {
		color: white;
	}
`;

export const StyledDiv = styled.div<{ gap?: number }>`
	display: flex;
	align-items: center;

	&.first {
		flex: 1 1 auto;
		gap: ${({ gap }) => (gap ? `${gap}px` : "15px")};

		@media (max-width: 992px) {
			gap: 15px;
		}

		@media (max-width: 560px) {
			justify-content: center;
			width: 100%;
		}

		& a {
			display: block;
			min-width: 120px;
			text-align: center;
			@media (max-width: 992px) {
				min-width: 100px;
			}
			@media (max-width: 768px) {
				min-width: 90px;
			}
		}
		& a.active {
			color: #ccc;
			text-decoration: underline;
		}
	}
	&.second {
		display: flex;
		justify-content: flex-end;
		flex: 0 0 300px;
		@media (max-width: 768px) {
			flex: 0 0 250px;
		}

		@media (max-width: 560px) {
			justify-content: space-between;
		}

		@media (max-width: 460px) {
			flex: 1 1 auto;
		}
		text-align: right;
		gap: ${({ gap }) => (gap ? `${gap}px` : "15px")};
	}
`;
