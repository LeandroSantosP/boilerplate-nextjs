import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   :root {
      --highlight: #FFD74B;
      --background: #0b032d;
      --white: #eeeeee;

      --container: 100rem;

      --small: 1.5rem;
      --mediun: 3rem;
      --large:  5rem;
   }

   *{
      margin:0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      font-size: 62.5%; //rem
   }

   html,body, #__next {
      height: 100%;
      background-color: var(--background);
      color: var(--white);
   }

   body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }

`;
