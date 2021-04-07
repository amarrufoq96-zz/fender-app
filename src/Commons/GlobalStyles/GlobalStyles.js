import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: 'Montserrat-Light', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #ff0000;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: white;
    height: 100vh;
    margin: 0 auto;
    /* impide que haga rebote el scroll */
    overscroll-behavior: none;
    width: 100%; 
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }

/* TitleComponent */

  .BottomHeader {
    margin: ${window.innerWidth <= 768 ? '15px 0px' : '0px'};
  }

  .BlueButton {
    background: #54A4B3;
    color: white;
  }

  
  .ColorBlue {
    color: #54A4B3;
  }

  .titleComponent {
    font-size: 21px;
    color: #3E608F;
  }

/* TitleComponent */


/* SesionsItem */

  .item {
    margin-bottom: 20px;
  }

/* SesionsItem */


`
