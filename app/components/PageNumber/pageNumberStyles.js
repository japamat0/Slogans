import { css } from 'styled-components';

const color = '#41addd';

const pageNumberStyles = css`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  padding: 0;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  border: none;
  background: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1em;
  width: 2em;
  color: ${props => (props.color ? props.color : color)};
`;

export default pageNumberStyles;
