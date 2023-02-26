import { createRoot } from "react-dom/client";

import App from "./App";
import GlobalStyle from "./GlobalStyle.styled";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<>
		<GlobalStyle />
		<App />
	</>
);
