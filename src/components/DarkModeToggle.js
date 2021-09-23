import React from 'react';
import { usePortfolioContext } from './Context';

import { StyledToggle } from './Styled/StyledToggle';

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode, currentColors } = usePortfolioContext().darkMode;

  const handleToggleClick = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <StyledToggle 
      currentColors={currentColors}
      onClick={handleToggleClick}>
      <div className="togWrap">
        {isDarkMode ? 
          (<i className="fas fa-sun"/>) : 
          (<i className="fas fa-moon"/>)}
        {isDarkMode ? 
          (<div className="togText"><span>Light</span><span>Mode</span></div>) : 
          (<div className="togText"><span>Dark</span><span>Mode</span></div>)}
      </div>
    </StyledToggle>
  )
}

export default DarkModeToggle