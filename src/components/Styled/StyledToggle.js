import styled from 'styled-components';

export const StyledToggle = styled.div`
  z-index: 10;
  color: ${props => props.currentColors.text};
  background: ${props => props.currentColors.bg};
  position: fixed;
  bottom: 0;
  left: 20px;
  padding: .5rem;
  border-top: 3px solid ${props => props.currentColors.text};
  border-left: 3px solid ${props => props.currentColors.text};
  border-right: 3px solid ${props => props.currentColors.text};
  border-radius: 5px 5px 0 0;
  cursor: pointer;

  .togWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .togText {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1225px) {
    left: calc((100% - 1225px) / 2);
  }
`