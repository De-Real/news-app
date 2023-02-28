import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { StyledDiv } from "../styles/Header.styled";
import { useTranslation } from "react-i18next";

const LanguagePicker = () => {
	const [isChecked, setIsChecked] = useState(true);

	const { i18n } = useTranslation();

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.checked) {
			i18n.changeLanguage("en");
		} else {
			i18n.changeLanguage("uk");
		}

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
