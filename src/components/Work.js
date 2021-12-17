import React, { useState, useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';

// Components
import WorkEditing from './WorkEditing';
import WorkDev from './WorkWebDev';
import WorkWriting from './WorkWriting';

// Styled Components
import { StyledWork } from './Styled/StyledInnerPages';
import { usePortfolioContext } from './Context';


const Work = () => {
  // !!!!!!!!!!!      IN ORDER TO MAKE THIS (THE TRANSITIONS) WORK, SET DATA FOR EACH INNER WORK DIV IN AN OBJECT, AND PASS IT TO A NEW 'INNER WORK' COMPONENT, AND WRAP THAT IN THE TRANSITION, THEN TRY IT. THIS IS TOO VANILLA OF A SOLUTION.     !!!!!!!!!!!!!! 
  const { currentColors } = usePortfolioContext().darkMode;
  const [ displayed, setDisplayed ] = useState('writing');

  const handleWorkClick = (e) => {
    setDisplayed(e.target.id);
  }

  const setWorkDiv = useCallback(() => {
    if (displayed === 'writing') {
      return <WorkWriting />
    } else if (displayed === 'editing') {
      return <WorkEditing />
    } else if (displayed === 'webDev') {
      return <WorkDev />
    }
  }, [displayed])

  useEffect(() => {
    setWorkDiv();
  }, [setWorkDiv]);

  return (
  <StyledWork currentColors={currentColors}>
    <div className="work">
      <h2>My Work</h2>
      <div className="workContainer">
        <nav 
          className="innerWorkNav" 
          onClick={handleWorkClick}>
          <ul>
            <li className={displayed === 'writing' ? 'active' : ''} id='writing'>Writing</li>
            <li className={displayed === 'editing' ? 'active' : ''} id='editing'>Editing</li>
            <li className={displayed === 'webDev' ? 'active' : ''} id='webDev'>Web Development</li>
          </ul>
        </nav>
        <div className="workBody">
            <CSSTransition
              in={displayed ? true : false}
              classNames="workInner"
              appear
              mountOnEnter
              unmountOnExit
              timeout={{appear: 500, enter: 500, leave: 200}}>
                {setWorkDiv()}
            </CSSTransition>
        </div>
      </div>
    </div>
  </StyledWork>
)}


export default Work