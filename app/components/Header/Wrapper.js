import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5em 2em;
  color: ${props => (props.theme.color ? props.theme.color : '#000')};
  background: ${props =>
    props.theme.background ? props.theme.background : 'transparent'};
`;

export default Wrapper;
