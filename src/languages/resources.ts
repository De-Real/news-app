// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

// <h2>Hello and welcome to this website!</h2>
// 			<p> Here you can find something simple and amazing :)</p>
// 			<p>
// 				Technologies stack: React, TypeScript, Redux TK, React Router DOM (6.4+
// 				version with new features), react-i18next and Material UI. Simple and
// 				REACTive -:
// 			</p>
// 			<h3>News page</h3>
// 			<p>
// 				News page fetch primitive news ( using loader) and render them. Redux is
// 				used to save some values between rerender.
// 			</p>
// 			<p>
// 				User can delete some news and load more news on button click. Also, news
// 				array is saved globally to avoid data loss and extra fetch process.
// 			</p>
// 			<h3>Language switcher</h3>
// 			<p>
// 				It's implemented using react-i18next and provide supporting for
// 				Ukrainian and English
// 			</p>
// 			<h3>Profile and login</h3>
// 			<p>
// 				User has to sign up (login: 'admin', password: '12345') to have access
// 				to profile. At the end user will see dummy profile page.
// 			</p>
export const resources = {
	en: {
		translation: {
			home: "Home",
			news: "News",
			profile: "Profile",
			signIn: "Sign in",
			welcome: "Hello and welcome to this website!",
			welcome_desc: "Here you can find something simple and amazing :)",
			technologies:
				"Technologies stack: React, TypeScript, Redux TK, React Router DOM (6.4+version with new features), react-i18next and Material UI. Simple and REACTive -:",
			news_t: "News page",
			news_desc:
				"News page fetch primitive news ( using loader) and render them. Redux is used to save some values between rerender.",
			news_task:
				"User can delete some news and load more news on button click. Also, news array is saved globally to avoid data loss and extra fetch process.",
			language_t: "Language switcher",
			language_desc:
				"It's implemented using react-i18next and provide supporting for Ukrainian and English",
			prof_login_t: "Profile and login",
			prof_login_desc:
				"User has to sign up (login: 'admin', password: '12345') to have access to profile. At the end user will see dummy profile page.",
		},
	},
	uk: {
		translation: {
			home: "Головна",
			news: "Новини",
			profile: "Профіль",
			signIn: "Увійти",
			welcome: "Привіт! Вітаю тебе на цьому сайті!",
			welcome_desc: "Тут ти відшукаєш дещо просте та чудове :)",
			technologies:
				"Використані технології: React, TypeScript, Redux TK, React Router DOM (версія 6.4+ з новими особливостями), react-i18next та Material UI. Просто та REACTивно -:",
			news_t: "Сторінка з новинами",
			news_desc:
				"Сторінка з новинами отримує новини за запитом (використовуючи loader) та показує їх. Redux використовується, щоб зберегти дані між рендерингами.",
			news_task:
				"Користувач може видалити деякі дані та завантажити більше новин при нажатті на кнопку. Також, масив з новинами зберігається глобально, щоб запобігти втраті даних та уникнути зайвих запитів.",
			language_t: "Змінювач мови",
			language_desc:
				"Реалізований з використанням react-i18next та може змінювати мову з англійською на українську та навпаки",
			prof_login_t: "Профіль та логін",
			prof_login_desc:
				"Користувач має увійти (логін: 'admin', пароль: '12345'), щоб мати доступ до профілю. В результаті цього користувач матиме змогу бачити статичний профіль.",
		},
	},
};
