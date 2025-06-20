import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Electrolize&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Space+Grotesk:wght@300..700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: #fff;
  }
`;

export default GlobalStyle;
