import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider as Provider } from "styled-components";
import "../styles/globals.css";

import { createStyledBreakpointsTheme } from "styled-breakpoints";

export const theme: DefaultTheme = createStyledBreakpointsTheme();

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider theme={theme}>
			<Component {...pageProps} />
		</Provider>
	);
};
export default App;
