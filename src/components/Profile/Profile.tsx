import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import adminPhoto from "../../assets/admin-photo.png";
import {
	StyledHeaderProfile,
	StyledImg,
	StyledLocation,
	StyledProfile,
	StyledTitle,
	StyledActivities,
	StyledButtonsControl,
} from "../styles/Profile.styled";

import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const Profile = () => {
	const { t } = useTranslation();
	return (
		<StyledProfile>
			<StyledHeaderProfile>
				<StyledImg>
					<img src={adminPhoto} alt="Admin" />
				</StyledImg>
				<div>
					<h3>{t("profile_name")}</h3>
					<StyledTitle> {t("profile_title")} </StyledTitle>
					<StyledLocation> {t("profile_location")} </StyledLocation>
					<p>{t("profile_description")}</p>
				</div>
			</StyledHeaderProfile>
			<StyledHeaderProfile>
				<StyledButtonsControl>
					<Button variant="contained">{t("profile_settings")}</Button>
					<Button variant="outlined">{t("profile_followers")}</Button>
				</StyledButtonsControl>
				<StyledActivities>
					<h3>{t("profile_activities")}</h3>
					<div>{t("profile_activities_desc")}</div>
					<div>{t("profile_activities_desc")}</div>
					<div>{t("profile_activities_desc")}</div>
				</StyledActivities>
			</StyledHeaderProfile>
		</StyledProfile>
	);
};

export default Profile;
