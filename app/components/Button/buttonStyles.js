import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 1.5em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  text-align: center;
  background: #0f4a9a;

  &:active {
    color: #fff;
  }

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

export default buttonStyles;
