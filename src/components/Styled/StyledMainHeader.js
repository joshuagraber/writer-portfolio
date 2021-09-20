import styled from 'styled-components';



// Export MainHeader and Nav from here
export const StyledMainHeader = styled.header`
  width: 100%;
  background: ${props => props.currentColors.bg};
  color: ${props => props.currentColors.text};

  .headerWrap {
    padding-top: 3rem;
    padding-bottom: 3rem;
    border-bottom: 2px solid ${props => props.currentColors.accentPop};
    border-radius:  0 0 15px 15px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  a {
    color: ${props => props.currentColors.text};
  }
  .logo {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .logo:hover {
    transform: unset;
  }
  .title,
  .subTitle {
    text-align: center;
  }
  .title {
    font-size: 2.5rem;
    margin: 0;
    text-transform: uppercase;
  } 
  .subTitle {
    font-size: 1.7rem;
    letter-spacing: .1rem;
  }

  @media (min-width: 600px) {
    .headerWrap {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      gap: 10px;
    }
    .title,
    .subTitle {
      text-align: left;
    }
  }
`

export const StyledMainNav = styled.div`
  nav {
    display: none;
  }
  nav ul {
    list-style-type: none;
    display: flex;
  }
  nav li {
    display: block;
    height: 40px;
    min-width: 80px;
  }
  nav a,
  nav.show a {
    width: 100%;
    height: 100%;
  }
  nav.show {
    display: block;
    height: auto;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: ${props => props.headerHeight}px;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
    background: ${props => props.currentColors.bg};
  }
  nav.show ul {
    flex-direction: column;
    gap: 15px;
  }
  nav.show li {
    display: block;
    width: 50%;
    max-width: 300px;
    margin: 0 auto;
    padding: 1.5rem;
    background: rgba(0,0,0, .2);
    border-radius: 2px;
  }
  nav.show a {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navLink {
    height: 100%;
    width: 100%;
  }
  .navActive {
    text-decoration: underline solid ${props => props.currentColors.accent};
  }

  .hamburger {
    height: 50px;
    width: 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
  }
  .bar {
    height: 5px;
    width: 100%;
    border-radius: 99999px;
    background-color: ${props => props.currentColors.text};
    transition: .3s all;
  }
  .hamburger.hide .bar1 {
      --webkit-transform: translateY(34px) rotate(-405deg);
        transform: translateY(34px) rotate(-405deg);
  }      
  .hamburger.hide .bar2 {
      background-color: ${props => props.currentColors.bg};
  }   
  .hamburger.hide .bar3 {
      --webkit-transform: rotate(405deg);
        transform: rotate(405deg);
  }
  @media (min-width: 600px) {
    align-self: flex-start;
    nav.show ul {
      flex-direction: row;
    }
  }
  @media (min-width: 800px) {
    nav {
      display: flex;
      gap: 20px;
    }
    nav a {
      font-size: 1.5rem;
    }
    .hamburger {
      display: none;
    }
    .navActive {
    text-decoration: underline solid ${props => props.currentColors.accent};
    }
  }
`