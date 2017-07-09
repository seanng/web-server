import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .nav>li>a:hover {
    background-color: transparent;
  }

  .nav>li>a:focus {
    background-color: transparent;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .navbar {
    margin-bottom: 0px;
  }

  .overviewBox {
    border: 1px solid black;
    text-align: left;
  }

  .overviewBoxHeader {
    border-bottom: 1px solid;
    padding: 15px;
    height: 66px;
  }

  .modal-header {
    text-align: center;
  }

  .form-group {
    margin-bottom: 0px;
  }

  .table > tbody > tr > td {
    vertical-align: middle;
  }

  .pac-container {
    z-index: 10000;
  }


`;
