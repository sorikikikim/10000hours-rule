import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { fontCss } from "./components/Header.style";

export const GlobalStyle = createGlobalStyle`
    ${reset}
		* {
			${fontCss}
			margin: 0;
			padding: 0;
			font-family: 'GmarketSans';
			font-size: 24px;
			font-weight: normal;
		}

		body {
			background-color: #5b2386;
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
	}
`;
