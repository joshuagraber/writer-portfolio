import styled from 'styled-components';
// export BlogMain, BlogHeader, Post, and PostPreview from here


export const StyledBlogHeader = styled.header`
  min-height: 100vh;
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
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .backHomeText {
    display: flex;
    flex-direction: column;
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
    font-size: 9rem;
    letter-spacing: .2rem;
  }
  .blogSubTitle {
    font-size: 2rem;
    letter-spacing: .3rem;
    line-height: 1.5;
    text-decoration: 3px solid underline ${props => props.currentColors.accentLight};
  }
  @media (min-width: 700px) {
    .blogTitle {
      font-size: 12rem;
    }
    .blogSubTitle {
      font-size: 2.8rem;
    }
  }
  @media (min-width: 900px) {
    .blogTitle {
      font-size: 15rem;
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
    padding: .5rem;
  }
  .imgContainer {
    width: 100%;
    height: auto;
    max-width: 350px;
  }
  img {
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
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
    margin-top: 3rem;
  }

  h2 {
    font-size: 2.75rem;
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
  .blogPost img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  .blogPost p {
    margin: 1rem 0;
  }

  ${'' /* Comments section */}
  .comments {
    margin: 3rem 0 0;
  }
  h3 {
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  .comments {
    padding: 1.5rem;
    border: 2px solid ${props => props.currentColors.accentPop};
    border-radius: 10px;
  }
  .commentsContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .commentWrap {
    background: rgba(0,0,0, .3);
    border-radius: 5px;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }
  .info {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: 1rem;
    font-weight: bold;
  }
  .date {
    font-weight: 300;
    font-size: .8rem;
    font-style: italic;
  }
  .comment {
    font-size: 1.1rem;
  }
  .formDiv {
    width: 100%;
    margin: 2rem 0 0;
    padding: 1.5rem;
    border: 2px solid ${props => props.currentColors.accentPop};
    border-radius: 5px;
  }
  .commentForm {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .nameDiv,
  .emailDiv,
  .commentDiv,
  .commentBtn {
    grid-column: 1 / -1;
  }
  .nameDiv,
  .emailDiv,
  .commentDiv {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .commentForm label {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
  }
  input[name="name"],
  input[name="email"],
  textarea {
    border: none;
    border: 2px solid ${props => props.currentColors.accentPop};
    border-radius: 5px;
    background: rgba(255,255,255, .1);
    padding: .5rem;
    font-family: var(--font-main);
    font-size: 1.05rem;
    color: ${props => props.currentColors.text};
  }
  input[name="name"]:active,
  input[name="email"]:active,
  textarea:active,
  input[name="name"]:focus,
  input[name="email"]:focus,
  textarea:focus {
    outline: none;
    border: none;
    border: 3px solid ${props => props.currentColors.accentDark};
  }
  input[name="name"],
  input[name="email"] {
    min-height: 40px;
  }
  textarea[name="comment"] {
    min-height: 200px;
  }
  .commentBtn {
    justify-self: center;
    background: none;
    border: none;
    outline: none;
    height: 50px;
    width: 150px;
    padding: .5rem 1rem;
    border: 3px solid ${props => props.currentColors.text};
    border-radius: 5px;
    background: rgba(255,255,255, .1);
    color: ${props => props.currentColors.text};
    font-size: 1.2rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .commentBtn:hover {
    font-size: 1.3rem;
  }
  .commentBtn:active {
    transform: scale(.97);
  }
`