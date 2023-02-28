import styled from "@emotion/styled";

const firstDiv = styled.div`
	width: 300px;
	margin-bottom: 10px;
	text-align: center;
`;

export const StyledProfile = styled.article`
	width: 768px;
`;

export const StyledHeaderProfile = styled.section`
	display: flex;
	gap: 30px;
`;

export const StyledTitle = styled.p`
	color: grey;
	margin-bottom: 25px;
`;

export const StyledImg = styled.div`
	margin-bottom: 10px;
	text-align: center;
	& img {
		width: 300px;
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
	padding-left: 50px;
	width: 300px;
	margin-bottom: 10px;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;
