import { NavLink } from "react-router-dom";
import { StyledDiv, StyledHeader } from "../styles/Header.styled";
import LanguagePicker from "./LanguagePicker";

import Button from "@mui/material/Button";

const Header = () => {
	const isLoggedIn = false;

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
				{isLoggedIn && (
					<NavLink
						to="/profile"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<Button variant="contained">Profile</Button>
					</NavLink>
				)}
				{!isLoggedIn && (
					<NavLink to="/login">
						<Button variant="contained">Sign in</Button>
					</NavLink>
				)}
			</StyledDiv>
		</StyledHeader>
	);
};

export default Header;
