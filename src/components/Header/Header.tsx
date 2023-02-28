import { NavLink } from "react-router-dom";
import { StyledDiv, StyledHeader } from "../styles/Header.styled";
import LanguagePicker from "./LanguagePicker";

import Button from "@mui/material/Button";
import { useAppSelector } from "../../store/hooks";
import { selectIsLoggedIn } from "../../store/loginSlice";

const Header = () => {
	const signedIn = useAppSelector(selectIsLoggedIn);

	return (
		<StyledHeader>
			<StyledDiv gap={50}>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					Home
				</NavLink>
				<NavLink
					to="/news"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					News
				</NavLink>
			</StyledDiv>
			<StyledDiv gap={30}>
				<LanguagePicker />
				{signedIn && (
					<NavLink
						to="/profile"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<Button variant="contained">Profile</Button>
					</NavLink>
				)}
				{!signedIn && (
					<NavLink to="/login">
						<Button variant="contained">Sign in</Button>
					</NavLink>
				)}
			</StyledDiv>
		</StyledHeader>
	);
};

export default Header;
