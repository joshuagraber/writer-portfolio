import styled from 'styled-components';
// export BlogMain, BlogHeader, Post, and PostPreview from here


export const StyledBlogHeader = styled.header`
  min-height: 400px;
  background-color: ${props => props.currentColors.bg};
  color: ${props => props.currentColors.text};

  a {
    color: ${props => props.currentColors.text};
  }
  .headerWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .backHome {
    align-self: flex-start;
    font-size: 1.3rem;
    letter-spacing: .2rem;
    text-transform: uppercase;
  }
  .titleLink:hover {
    transform: unset;
    opacity: unset;
  }
  .blogTitle,
  .blogSubTitle {
    text-align: center;
    max-width: 800px;
  }
  .blogTitle {
    text-transform: uppercase;
    font-size: 5rem;
    letter-spacing: .2rem;
  }
  .blogSubTitle {
    font-size: 2rem;
    letter-spacing: .3rem;
    line-height: 1.5;
  }
  @media (min-width: 700px) {
    .blogTitle {
      font-size: 9rem;
    }
    .blogSubTitle {
      font-size: 2.8rem;
    }
  }
  @media (min-width: 900px) {
    .blogTitle {
      font-size: 11rem;
    }
    .blogSubTitle {
      font-size: 3rem;
    }
  }
  
`

export const StyledBlogContainer = styled.div`
  width: 95%;
  max-width: 1125px;
  margin: 0 auto;
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
  gap: 20px;
  justify-content: center;

  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
    grid-column: 1 / -1;
  }
  .pagination > .active > a{
    background-color: ${props => props.currentColors.accent};
    border-color: ${props => props.currentColors.accent};
    color: #fff;
  }
  .pagination > li > a{
    border: 1px solid ${props => props.currentColors.accentPop};
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a, 
  .pagination > .active > span, 
  .pagination > .active > a:hover, 
  .pagination > .active > span:hover, 
  .pagination > .active > a:focus, 
  .pagination > .active > span:focus{
    background-color: ${props => props.currentColors.accentPop} ;
    border-color: ${props => props.currentColors.accentPop};
    outline: none ;
  }
  .pagination > li > a, 
  .pagination > li > span{
    color: ${props => props.currentColors.text};
  }
  .pagination > li:first-child > a, 
  .pagination > li:first-child > span, 
  .pagination > li:last-child > a, 
  .pagination > li:last-child > span{
    border-radius: unset
  }
`


export const StyledBlogPreview = styled.div`
  width: 100%;

  .blogCard {
    display: flex;
    flex-direction: column;
  }
  h3 {
    color: ${props => props.currentColors.text};
  }
  .imgContainer {
    width: 100%;
    height: auto;
    max-width: 350px;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
`

export const StyledPost = styled.div`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem 0;
  font-size: 1.2rem;
  line-height: 1.7;

  .blogPostWrap {
    width: 100%;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  figure {
    width: 100%;
    position: relative;
    border-radius: 5px 5px 0 0;
  }
  figcaption {
    width: 100%;
    background: rgba(0,0,0, .3);
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: .1rem;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: .5rem;
    opacity: 0;
    transition: all .4s;
  }
  figure:hover figcaption {
    opacity: 1;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  p {
    margin: 1rem 0;
  }
`