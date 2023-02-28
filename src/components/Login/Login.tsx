import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { StyledForm, StyledLoginWrapper } from "../styles/Login.styled";
import Button from "@mui/material/Button";
import { useActionData, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { logIn } from "../../store/loginSlice";
import { useTranslation } from "react-i18next";

type ActionResponseType = { error: boolean } | undefined;

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState(false);
	const dispatch = useAppDispatch();

	const data = useActionData() as ActionResponseType;

	const { t } = useTranslation();

	const navigate = useNavigate();

	useEffect(() => {
		if (typeof data !== "object") return;

		if (data.error) {
			setError(data.error);
			return;
		} else {
			dispatch(logIn());
			navigate("/profile");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, dispatch]);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<StyledLoginWrapper>
			<h2> {t("signIn")}</h2>
			<div>
				<p>{t("signIn_text")}</p>
				<p>
					{t("signIn_login")}: <span>admin</span>
				</p>
				<p>
					{t("signIn_password")}: <span>12345</span>
				</p>
			</div>

			<StyledForm method="post">
				<TextField
					error={error}
					id="outlined-error-helper-text"
					label={t("signIn_login")}
					defaultValue={""}
					name="login"
				/>
				<FormControl variant="outlined" error={error}>
					<InputLabel htmlFor="outlined-adornment-password">
						{t("signIn_password")}
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password"
						defaultValue={""}
						name="password"
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
					/>
				</FormControl>
				{error && <p>{t("signIn_error")}</p>}
				<Button type="submit" variant="contained">
					{t("submit")}
				</Button>
			</StyledForm>
		</StyledLoginWrapper>
	);
};

export default Login;
