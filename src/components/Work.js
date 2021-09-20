import React, { useState, useEffect, useCallback } from 'react';

// Components
import WorkEditing from './WorkEditing';
import WorkInterviews from './WorkInterviews';
import WorkWriting from './WorkWriting';

// Styled Components
import { StyledWork } from './Styled/StyledInnerPages';
import { usePortfolioContext } from './Context';


const Work = () => {
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
    } else if (displayed === 'interviews') {
      return <WorkInterviews />
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
            <li className={displayed === 'interviews' ? 'active' : ''} id='interviews'>Interviews</li>
          </ul>
        </nav>
        <div className="workBody">
          {setWorkDiv()}
        </div>
      </div>
    </div>
  </StyledWork>
)}


export default Work