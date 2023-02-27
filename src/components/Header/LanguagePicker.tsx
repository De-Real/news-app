import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { StyledDiv } from "../styles/Header.styled";

const LanguagePicker = () => {
	const [isChecked, setIsChecked] = useState(true);

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.currentTarget.checked);
	};

	return (
		<StyledDiv gap={1}>
			<p> uk </p>
			<Switch onChange={changeHandler} value={isChecked} defaultChecked />
			<p> en </p>
		</StyledDiv>
	);
};

export default LanguagePicker;
