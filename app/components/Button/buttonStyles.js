import { css } from 'styled-components';

const color = '#41addd';
const border = '#41addd';
const background = 'transparent';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: '0.25em 2em';
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
  border: 2px solid
    ${props => (props.theme.border ? props.theme.border : border)};
  background: ${props => (props.theme.bg ? props.theme.bg : background)};
  color: ${props => (props.theme.color ? props.theme.color : color)};
  box-shadow: -2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:active {
    background: ${props => (props.theme.color ? props.theme.color : color)};
    color: ${props => (props.theme.bg ? props.theme.bg : background)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: ${props => (props.theme.color ? props.theme.color : color)};
    color: ${props => (props.theme.bg ? props.theme.bg : background)};
  }
`;

export default buttonStyles;
