import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

// Components
import WorkInner from './WorkInner';

// Styled Components
import { StyledWork } from './Styled/StyledInnerPages';
import { usePortfolioContext } from './Context';

// Data
import { workInnerText } from '../data';

const Work = () => {
  const { currentColors } = usePortfolioContext().darkMode;
  const [displayed, setDisplayed] = useState('writing');

  const handleWorkClick = (e) => {
    setDisplayed(e.target.id);
  };

  return (
    <StyledWork currentColors={currentColors}>
      <div className="work">
        <h2>My Work</h2>
        <div className="workContainer">
          <nav className="innerWorkNav" onClick={handleWorkClick}>
            <ul>
              <li className={displayed === 'writing' ? 'active' : ''} id="writing">
                Writing
              </li>
              <li className={displayed === 'editing' ? 'active' : ''} id="editing">
                Editing
              </li>
              <li className={displayed === 'webDev' ? 'active' : ''} id="webDev">
                Web Development
              </li>
            </ul>
          </nav>
          <div className="workBody">
            <CSSTransition
              in={!displayed ? false : true}
              classNames="workInner"
              appear
              unmountOnExit
              timeout={{ appear: 500, enter: 500, leave: 200 }}
            >
              {<WorkInner data={workInnerText} key={displayed} displayed={displayed} />}
            </CSSTransition>
          </div>
        </div>
      </div>
    </StyledWork>
  );
};

export default Work;
