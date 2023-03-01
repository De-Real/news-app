import styled from "@emotion/styled";

export const StyledProfile = styled.article`
	width: 100%;
	display: flex;
	gap: 20px;
	@media (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export const StyledContentProfile = styled.section`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const StyledAsideProfile = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 0 1 300px;
	gap: 15px;
`;

export const StyledTitle = styled.p`
	color: grey;
	margin-bottom: 25px;
`;

export const StyledImg = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 250px;
	@media (max-width: 768px) {
		width: 300px;
	}
	margin-bottom: 10px;

	& img {
		width: 100%;
		height: auto;
	}
`;

export const StyledLocation = styled.p`
	margin-bottom: 20px;
`;

export const StyledActivities = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	& div {
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 5px;
	}
`;

export const StyledButtonsControl = styled.div`
	width: 250px;
	@media (max-width: 768px) {
	}

	margin-bottom: 10px;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;
