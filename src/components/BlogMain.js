// Imports
// React
import React, { useState, useEffect, useCallback } from 'react';
// Libraries
import ReactPaginate from 'react-paginate';
// Context
import { usePortfolioContext } from './Context';
// Component
import PostPreview from './PostPreview';
//Styled Component
import { StyledBlogContainer } from './Styled/StyledBlog';


const BlogMain = () => {
  const { postData, error, loading } = usePortfolioContext().data;
  const { currentColors } = usePortfolioContext().darkMode;

  const [ thumbData, setThumbData ] = useState([])
  const [ offset, setOffset ] = useState([]);
  const [ perPage ] = useState(6);
  const [ pageCount, setPageCount ] = useState(0);


  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  }

  const updatePosts = useCallback(() => {
    const offsetPosts = postData.slice(offset, offset + perPage);
      const offsetPostData = offsetPosts.map(( post ) => 
            <PostPreview
              key={post.id}
              img={post.better_featured_image.source_url}
              title={post.title.rendered}
              slug={post.slug}
            />
      )
      setThumbData(offsetPostData);
      setPageCount(Math.ceil(postData.length / perPage));
  }, [offset, perPage, postData])

  useEffect(() => {
      updatePosts();
    }, [offset, updatePosts])

  // Status handling via state
  if (error) return `Error: ${error.message}`;
  if (!postData) return 'Sorry, something went wrong! Please refresh the page and try again.' 
  if (loading) return 'Loading...';

  return (
    <StyledBlogContainer currentColors={currentColors}>
      {thumbData}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        />
    </StyledBlogContainer>
  )
}

export default BlogMain