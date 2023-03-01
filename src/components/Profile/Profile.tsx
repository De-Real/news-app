import adminPhoto from "../../assets/admin-photo.png";
import {
	StyledContentProfile,
	StyledAsideProfile,
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
			<StyledAsideProfile>
				<StyledImg>
					<img src={adminPhoto} alt="Admin" />
				</StyledImg>
				<StyledButtonsControl>
					<Button variant="contained">{t("profile_settings")}</Button>
					<Button variant="outlined">{t("profile_followers")}</Button>
				</StyledButtonsControl>
			</StyledAsideProfile>
			<StyledContentProfile>
				<div>
					<h3>{t("profile_name")}</h3>
					<StyledTitle> {t("profile_title")} </StyledTitle>
					<StyledLocation> {t("profile_location")} </StyledLocation>
					<p>{t("profile_description")}</p>
				</div>
				<StyledActivities>
					<h3>{t("profile_activities")}</h3>
					<div>{t("profile_activities_desc")}</div>
					<div>{t("profile_activities_desc")}</div>
					<div>{t("profile_activities_desc")}</div>
				</StyledActivities>
			</StyledContentProfile>
		</StyledProfile>
	);
};

export default Profile;
