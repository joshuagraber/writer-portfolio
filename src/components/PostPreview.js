//Imports
// React
import React from 'react';
// Libraries
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Context
import { usePortfolioContext } from './Context';
// Styled Components
import { StyledBlogPreview } from './Styled/StyledBlog';

const PostPreview = ({ img, title, slug, key }) => {
  PostPreview.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string
  };

  const { currentColors } = usePortfolioContext().darkMode;

  return (
    <div className="cardTrans">
      <Link to={`/io/${slug}`} className="cardLink">
        <StyledBlogPreview currentColors={currentColors}>
          <article className="blogCard">
            <div className="imgContainer">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
          </article>
        </StyledBlogPreview>
      </Link>
    </div>
  );
};

export default PostPreview;
