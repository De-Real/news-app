import React from "react";
import { StyledHome } from "../styles/Home.styled";

const Home = () => {
	return (
		<StyledHome>
			<h2>Hello and welcome to this website!</h2>
			<p> Here you can find something simple and amazing :)</p>
			<p>
				Technologies stack: React, TypeScript, Redux TK, React Router DOM (6.4+
				version with new features), react-i18next and Material UI. Simple and
				REACTive -:
			</p>
			<h3>News page</h3>
			<p>
				News page fetch primitive news ( using loader) and render them. Redux is
				used to save some values between rerender.
			</p>
			<p>
				User can delete some news and load more news on button click. Also, news
				array is saved globally to avoid data loss and extra fetch process.
			</p>
		</StyledHome>
	);
};

export default Home;
