import styled from 'styled-components';

export const StyledPageWrap = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.currentColors.bg};
  color: ${props => props.currentColors.text};
`