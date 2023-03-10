import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


/* NULL STYLES START*/
	* {
	padding: 0;
	margin: 0;
	border: 0;
	}
*,
*:before,
*:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,
:active {
	outline: none;
}
a:focus,
a:active {
	outline: none;
}
nav,
footer,
header,
aside {
	display: block;
}
html,
body {
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	}
input,
button,
textarea {
	font-family: inherit;
}
input::-ms-clear {
	display: none;
}
button {
	cursor: pointer;
}
button::-moz-focus-inner {
	padding: 0;
	border: 0;
}
a,
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
ul li {
	list-style: none;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: inherit;
	font-weight: 400;
}
/* NULL STYLES END*/

  body > #root  {
		min-height: 100vh;
		width: 100%;
		background: #FFFFFF;
		color: #171A21;
		line-height: 1.2;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px 80px;
		@media (max-width: 768px) {
			padding: 25px 50px;
		}
		@media (max-width: 560px){
			padding: 15px 30px;
		}
		@media (max-width: 460px){
			padding: 10px 15px;
		}
	}

	h2 {
		font-size: 36px;
		font-weight: 700;
		text-align: center;
		@media (max-width: 560px){
			font-size: 30px;
		}
	}

	h3 { 
		font-size: 28px;
		font-weight: 700;
		@media (max-width: 560px){
			font-size: 24px;
		}
	}
`;

export default GlobalStyle;
