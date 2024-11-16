import { createGlobalStyle} from "styled-components";

const globalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "Poppins", sans-serif;
  }
`
export default globalCSS;