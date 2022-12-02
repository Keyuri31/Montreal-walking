import { createGlobalStyle } from 'styled-components';
import image from "./images/newimage.png";

const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    padding:0;
}
  #root{
    margin: 0;
    padding: 0;
    height:100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-image:url(${image});
    // min-height:100%;
    // overflow:hidden;
    background-size:cover;
    box-sizing:border-box;
  }

`;
 
export default GlobalStyle;