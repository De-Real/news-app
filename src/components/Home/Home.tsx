import React from "react";
import { useTranslation } from "react-i18next";
import { StyledHome } from "../styles/Home.styled";

const Home = () => {
	const { t } = useTranslation();

	return (
		<StyledHome>
			<h2>{t("welcome")}</h2>
			<p>{t("welcome_desc")}</p>
			<p>{t("technologies")}</p>
			<h3>{t("news_t")}</h3>
			<p>{t("news_desc")}</p>
			<p>{t("news_task")}</p>
			<p>{t("news_limitation")}</p>
			<h3>{t("language_t")}</h3>
			<p>{t("language_desc")}</p>
			<h3>{t("prof_login_t")}</h3>
			<p>{t("prof_login_desc")}</p>
		</StyledHome>
	);
};

export default Home;
