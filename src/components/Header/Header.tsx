import { NavLink } from "react-router-dom";
import { StyledDiv, StyledHeader } from "../styles/Header.styled";
import LanguagePicker from "./LanguagePicker";

import Button from "@mui/material/Button";
import { useAppSelector } from "../../store/hooks";
import { selectIsLoggedIn } from "../../store/loginSlice";
import { useTranslation } from "react-i18next";

const Header = () => {
	const signedIn = useAppSelector(selectIsLoggedIn);
	const { t } = useTranslation();

	return (
		<StyledHeader>
			<StyledDiv gap={50} className="first">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					{t("home")}
				</NavLink>
				<NavLink
					to="/news"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					{t("news")}
				</NavLink>
			</StyledDiv>
			<StyledDiv gap={30} className="second">
				<LanguagePicker />
				{signedIn && (
					<NavLink
						to="/profile"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<Button variant="contained">{t("profile")}</Button>
					</NavLink>
				)}
				{!signedIn && (
					<NavLink to="/login">
						<Button variant="contained">{t("signIn")}</Button>
					</NavLink>
				)}
			</StyledDiv>
		</StyledHeader>
	);
};

export default Header;
