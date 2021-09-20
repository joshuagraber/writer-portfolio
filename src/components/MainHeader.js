import React from 'react';
import { Link } from 'react-router-dom';

// Context
import { usePortfolioContext } from './Context';

// Hooks
import { useResizeDetector } from 'react-resize-detector';

// Components
import Nav from './Nav';

// Styled Components
import { StyledMainHeader } from './Styled/StyledMainHeader';




const MainHeader = ( ) => {
  const { currentColors }  = usePortfolioContext().darkMode;

  const { width, height, ref } = useResizeDetector();

  return (
    <StyledMainHeader 
      currentColors={currentColors} 
      ref={ref}
      >
      <div className="wrapper headerWrap" >
        <div className="intro">
          <Link to="/about" className="logo">
            <h1 className="title">Joshua D. Graber</h1>
            <p className="subTitle useDecFont">Writer | Editor</p>
          </Link>
        </div>
        <Nav 
          currentColors={currentColors} 
          headerWidth={width} 
          headerHeight={height}/>
      </div>
    </StyledMainHeader>
  )
}

export default MainHeader