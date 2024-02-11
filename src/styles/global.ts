import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

body {
    background-color: ${(props) => props.theme.backgroundColor};
}
`;

export default GlobalStyle;
