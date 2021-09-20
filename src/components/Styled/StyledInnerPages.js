import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 100%;
  background-color: ${props => props.currentColors.bg};

  .about {
    width: 95%;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .about h2 {
    text-align: center;
    font-size: 1.9rem;
    letter-spacing: .2rem;
  }
  .about .profileImg {
    display: block;
    width: 70%;
    max-width: 350px;
    border: 2px solid ${props => props.currentColors.accentDark};
    border-radius: 50%;
    box-shadow: -1px 2px 2px 1px ${props => props.currentColors.accent};
    margin: 1rem auto;
  }
  .about p {
    line-height: 2;
  }

  @media (min-width: 800px) {
    .about {
      padding-top: 5rem;
    }
    .about h2 {
      font-size: 2.5rem;
    }
  }

`

export const StyledWork = styled.div`
  .work {
    width: 95%;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }
  .work h2 {
    text-align: center;
    font-size: 1.9rem;
    letter-spacing: .2rem;
    margin-bottom: 2rem;
  }

  .innerWorkNav ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  .innerWorkNav li {
    flex: 1;
    height: 40px;
    background: rgba(0,0,0, .3);
    padding: 1.5rem 1rem;
    border-radius: 10px 10px 0 0;
    font-size: 1.3rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .innerWorkNav li.active {
    background: ${props => props.currentColors.accentPop};
  }

  .workInner {
    padding: 2rem 1rem;
    border: 3px solid ${props => props.currentColors.accentPop};
    border-radius: 0 0 10px 10px;
  }

  .workInner p {
    line-height: 2;
    margin-top: 2rem;
  }

  @media (max-width: 492px) {
    .workInner {
      border-top: none;
    }
    #writing {
      order: 4;
      flex: 1 1 100%;
    }
    #editing,
    #interviews {
      border-radius: 10px;
    }
  }

  @media (min-width: 800px) {
    .work {
      padding-top: 5rem;
    }
    .work h2 {
      font-size: 2.5rem;
    }
  }
`