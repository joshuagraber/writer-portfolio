import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background: ${props => props.currentColors.bg};
  color: ${props => props.currentColors.text};
  

  .footerWrap {
    width: 100%;
    background: ${props => props.currentColors.bg};
    border-top: 2px solid ${props => props.currentColors.accentPop};
    border-radius: 5px 5px 0 0;
  }
  .footerLinks {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .linkList {
    list-style-type: none;
    display: flex;
    gap: 10px;
  }

  @media (min-width: 600px) {
    .footerLinks {
      align-items: flex-end;
    }
  }
`