import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    // restes

    *, *::after, *::before{
        padding : 0;
        margin : 0;
        box-sizing : border-box   
    }

    html, body {
        height: 100%;
      }
      
    body{
        font-family : 'Poppins', sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    input, button, textarea, select {
        font: inherit;
      }

      img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
      }

`;
 
export default GlobalStyle;