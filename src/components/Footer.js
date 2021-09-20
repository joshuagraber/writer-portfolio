import React from 'react';
import { usePortfolioContext } from './Context';

import { StyledFooter } from './Styled/StyledFooter';

const Footer = () => {
  const { currentColors } = usePortfolioContext().darkMode;

  return (
    <StyledFooter currentColors={currentColors}>
      <div className="wrapper footerWrap">
        <div className="footerLinks">
          <h3>Contact</h3>
            <ul className="linkList">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
        </div>
      </div>
    </StyledFooter>
  )
}


export default Footer