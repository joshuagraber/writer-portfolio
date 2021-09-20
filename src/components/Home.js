import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => { // Style this in reg. sheet, auto dark theme
  return (
    <div className="homePage">
      <div className="homeWrapper">
        <h1 className="homeTitle">Joshua D. Graber</h1>
        <p className="homeSubTitle">Writer|Editor</p>
        <Link to={'/about'} className="enter">
          ENTER SITE
        </Link>
      </div>
    </div>
  )
}


export default Home