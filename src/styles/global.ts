import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
      background-color:#114F73;
      color: #E4E4E4;
  }


  ::-webkit-scrollbar{
    width: 6px;
  }

  ::-webkit-scrollbar-track{
    background-color: #E4E4E4;
    border-radius: 19px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #C4C4C4;
    border-radius: 19px;
  }

  body {


    font-family: 'Inter', sans-serif;
    font-weight: 400;


    /* font-size: calc( 8px + ( (16 - 8) / 1200 ) * 100vw); */
    font-size: 16px;
  }

  main{
  }



  a {
    font-weight: 500;
    font-size: 1em;
    line-height: 19px;
  }

  a, button {
    cursor: pointer;
  }

  input, textarea, h1, h2, h3, h4, h5, p, li, a, button, label {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
  }

  h2{
    //font-size: 32px;
    font-size: 2em;

    font-weight: 300;


  }

  h3{
    //font-size: 24px;
    font-size: 1.5em;

    font-weight: 700;
    line-height: 29px;

  }

  h4{
    //font-size: 24px;
    font-size: 1.5em;

    font-weight: 600;
    line-height: 28px;
  }

  h5{
   // font-size: 18px;
    font-size: 1.125em;

    font-weight: 600;
    line-height: 27px;

  }

  p, span{
   // font-size: 14px;
    font-size: 0.875em;

    font-weight: 400;
    line-height: 21px;

  }

  main{
    width: 100%;
    min-height: calc(100vh - 931px);
    display: flex;
    flex-direction: column;
    align-items: center;
    //background-color: rgb(245, 245, 245);
   // box-shadow: rgb(0 0 0 / 5%) 4px 4px 80px inset;
  }

  section{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 1200px;


  }

  .title {
    max-width: 955px;
    width: 100%;
    margin-bottom: 20px;
    padding: 0 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;


    >a{
      margin-bottom: 5px;
    }

  }

  .confirma-cha{
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:  rgba(161, 220, 234, 0.25);

    >p{
      font-size: 18px;
      color: #0a325b;
    }
  }
`;
