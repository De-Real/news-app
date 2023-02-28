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

const Profile = () => {
	return (
		<StyledProfile>
			<StyledHeaderProfile>
				<StyledImg>
					<img src={adminPhoto} alt="Admin" />
				</StyledImg>
				<div>
					<h3> James Admin </h3>
					<StyledTitle> Owner of imagine corporation </StyledTitle>
					<StyledLocation> Location: Silicon Valley </StyledLocation>
					<p>
						Description: Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Explicabo aperiam porro hic repudiandae, culpa dolorum
						commodi? Architecto praesentium fugiat nostrum? Repellendus, iusto
						incidunt. Error suscipit eveniet animi aperiam, voluptatem alias?
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
						totam omnis accusamus unde! Aspernatur rem perspiciatis quo iste
						porro, nam corrupti quod enim labore veritatis eligendi, temporibus
						nisi. Adipisci, quidem?
					</p>
				</div>
			</StyledHeaderProfile>
			<StyledHeaderProfile>
				<StyledButtonsControl>
					<Button variant="contained">Settings</Button>
					<Button variant="outlined">Followers (46)</Button>
				</StyledButtonsControl>
				<StyledActivities>
					<h3>Activities</h3>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugit ex
						dignissimos alias quidem, quia numquam quibusdam dolor animi
						voluptate, nesciunt, temporibus at in labore dicta! Rerum laboriosam
						eos magnam?
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
						dicta necessitatibus. Architecto impedit, ad maiores iusto
						repudiandae debitis dolore provident a veniam dolor esse tempora
						quidem, doloribus rem enim error!
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque
						exercitationem commodi assumenda, voluptatibus numquam quos. Fugiat
						ut deserunt dolores, voluptatibus ipsa, quae fuga repellat, maxime
						autem quaerat debitis amet.
					</div>
				</StyledActivities>
			</StyledHeaderProfile>
		</StyledProfile>
	);
};

export default Profile;
