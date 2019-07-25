import styled from 'styled-components';

const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  background: ${props =>
    props.theme.background ? props.theme.background : 'transparent'};
`;

export default BrandWrapper;
