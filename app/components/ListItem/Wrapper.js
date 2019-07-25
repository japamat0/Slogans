import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-top: 1px solid #e3e3e3;
  padding: 0.5em 0;

  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
