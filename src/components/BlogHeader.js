import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioContext } from './Context';

// Hooks
import { useResizeDetector } from 'react-resize-detector';

// Styled
import { StyledBlogHeader } from './Styled/StyledBlog';



const BlogHeader = () => {
  const { currentColors } = usePortfolioContext().darkMode;
  const [ walks, setWalks ] = useState({});
  
  const { width, height, ref } = useResizeDetector();  

  const shadow = (e) => {
    const walk = 100;
    const colorWalk = 255;
    let {clientX: x, clientY: y} = e;

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    const colorX = Math.round((x / width * colorWalk) - (colorWalk / 2));
    const colorY = Math.round((y / height * colorWalk) - (colorWalk / 2));
    const colorZ = Math.round((x + y / ((height * width) * colorWalk)) - (colorWalk / 2));

    setWalks({x: xWalk, 
              y: yWalk, 
              cX: colorX, 
              cY: colorY, 
              cZ: colorZ});
  }



  return (
    <StyledBlogHeader 
      ref={ref}
      currentColors={currentColors}
      onMouseMove={shadow}>
      <div className="wrapper headerWrap">
        <Link to={'/about'} className="backHome"><i className="fas fa-arrow-left"/> Back Home</Link>
        <Link to='/io' className="titleLink">
          <h1 
            className="blogTitle" 
            style={{textShadow: 
                  `${walks.x}px ${walks.y}px 0 rgba(${walks.cX}, ${walks.cY}, ${walks.cZ}, 0.7),
                  ${walks.x * -1}px ${walks.y}px 0 rgba(${walks.cX * -1}, ${walks.cZ}, ${walks.cY}, 0.7),
                  ${walks.x}px ${walks.y * -1}px 0 rgba(${walks.cX}, ${walks.cZ * -1}, ${walks.cY}, 0.7),
                  ${walks.x * -1}px ${walks.y * -1}px 0 rgba(${walks.cX}, ${walks.cZ * -1}, ${walks.cY * -1}, 0.7)
                  `
            }}>
          I/O
          </h1>
          <p className="blogSubTitle">A blog on being<br/>on (and off) the Internet</p>
        </Link>
      </div>
    </StyledBlogHeader>
  )
}

export default BlogHeader