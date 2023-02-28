import { createRoot } from "react-dom/client";

import App from "./App";
import GlobalStyle from "./GlobalStyle.styled";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import "./i18n";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<GlobalStyle />
		<App />
	</Provider>
);
