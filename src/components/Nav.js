import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


//Styled components
import { StyledMainNav } from './Styled/StyledMainHeader';




const Nav = ( { currentColors, headerWidth, headerHeight } ) => {
  Nav.propTypes = {
    currentColors: PropTypes.object,
    headerWidth: PropTypes.number,
    headerHeight: PropTypes.number
  }

  const [ navOpen, setNavOpen ] = useState(false);

  const handleNavClick = () => {
    if (headerWidth > 800 ) {
      setNavOpen(false)
    } else {
      setNavOpen(!navOpen);
    }
  }

  useEffect(() => {
    if (headerWidth > 800) {
      setNavOpen(false);
    }
  }, [headerWidth]);

  return (
    <>
      <StyledMainNav
        currentColors={currentColors}
        headerHeight={headerHeight}
        headerWidth={headerWidth}>
          <nav className={navOpen ? "show" : ""} >
            <ul onClick={handleNavClick}>
              <li>
                <NavLink 
                  to='/about' 
                  key='nav-1' 
                  className="navLink" 
                  activeClassName="navActive">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/work' 
                  key='nav-2' 
                  className="navLink" 
                  activeClassName="navActive">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/io' 
                  key='nav-3' 
                  className="navLink" 
                  activeClassName="navActive">
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
      <div className={navOpen ? "hamburger hide" : "hamburger"} onClick={handleNavClick}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>
      </StyledMainNav>
    </>
  )
}

export default Nav