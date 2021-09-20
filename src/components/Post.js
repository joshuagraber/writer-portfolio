import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { usePortfolioContext } from './Context';

import { StyledPost } from './Styled/StyledBlog';


const Post = () => {
  const  { slug }  = useParams();
  const [ postToDisplay, setPostToDisplay ] = useState(null);
  const { postData } = usePortfolioContext().data;
  const { currentColors } = usePortfolioContext().darkMode;
    
  useEffect(() => {
    setPostToDisplay(postData.find(r => r.slug === slug));
  }, [ postToDisplay, setPostToDisplay, slug, postData ])

  console.log(postToDisplay);



  return (
    <StyledPost currentColors={currentColors}>
      { postToDisplay ? 
        (
          <div className="blogPostWrap">
            <h2>{postToDisplay.title.rendered}</h2>
            <div className="blogPost" dangerouslySetInnerHTML={{__html: `${postToDisplay.content.rendered}`}} />
          </div>
          // Need to include comments here ( display, then add form with POST action to add comments )

        ) 
        : ('')
      }
    </StyledPost>
  )
}


export default Post