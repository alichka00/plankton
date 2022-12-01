import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body{
    background-color: #0f0d0df7;
    font-family: "Abel", sans-serif;
    color: #fffc;
  }

  table{
    margin: 0;
  }

  li{
    list-style-type: none;
  }
`;
