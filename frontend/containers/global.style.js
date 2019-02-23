import { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';

export const GlobalStyle = createGlobalStyle`
/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0; }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal; }

ul {
  list-style: none; }

button,
input,
select,
textarea {
  margin: 0; }

html {
  box-sizing: border-box; }

* {
  &,
  &::before,
  &::after {
    box-sizing: inherit; } }

img,
audio,
video {
  height: auto;
  max-width: 100%; }

iframe {
  border: 0; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

td,
th {
  padding: 0;
  text-align: left; }

/* Base */
  html {
    background-color: ${themeGet( 'colors.offWhite' )};
    font-size: ${themeGet( 'fontSizes.4', '16' )}px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;

    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-locale: "en";
  }

  article,
  aside,
  figure,
  footer,
  header,
  hgroup,
  section {
    display: block; }

    body {
    height: 100%;
	  width: 100%;
    position: relative;
	  overflow: hidden;
	  background: ${themeGet( 'colors.offWhite', 'rgb(237, 237, 237)' )};
    font-size: 1rem;
    font-weight: ${themeGet( 'fontWeights.3', '400' )};
    line-height: 1.5;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #0023ff;
  }

  a:hover {
    text-decoration: none;
  }
`;
