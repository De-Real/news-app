import React, { useState } from "react";
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

type ActionResponseType = { error: boolean } | undefined;

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useAppDispatch();

	const data = useActionData() as ActionResponseType;

	const navigate = useNavigate();

	let error = false;

	if (typeof data === "object") {
		error = data.error;
		if (!data.error) {
			dispatch(logIn());
			navigate("/profile");
		}
	}

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<StyledLoginWrapper>
			<h2> Sign in</h2>
			<div>
				<p> Sign in using your login and password</p>
				<p>
					Login: <span>admin</span>
				</p>
				<p>
					Password: <span>12345</span>
				</p>
			</div>

			<StyledForm method="post">
				<TextField
					error={error}
					id="outlined-error-helper-text"
					label="Login"
					defaultValue={""}
					name="login"
				/>
				<FormControl variant="outlined" error={error}>
					<InputLabel htmlFor="outlined-adornment-password">
						Password
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
				{error && <p>Login or password is incorrect. Please try again</p>}
				<Button type="submit" variant="contained">
					Submit
				</Button>
			</StyledForm>
		</StyledLoginWrapper>
	);
};

export default Login;
