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
              <li className="socialLink"><a href="mailto:joshua.d.graber@gmail.com"><i className="fas fa-envelope"></i></a></li>
              <li className="socialLink"><a href="https://www.twitter.com/joshuadgraber" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
            </ul>
        </div>
      </div>
    </StyledFooter>
  )
}


export default Footer