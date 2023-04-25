import styled from 'styled-components'
import Logo from '../../assets/Logo.png'


export const Container = styled.div`
  max-width: 100vw;
  /* min-height: 100vh; */
  
`
export const Header = styled.header`
  display: flex;
  flex-direction: row; 
  background-color: #F5DB13; 
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
    width: 100%;

  

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    a {

      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.22rem;
      color: #000000;
      font-family: 'Karla';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 29px;
      text-decoration: none;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid #000;
      }

      &:active {
        color: #000;
        text-decoration: dashed;
      }
    }
  }

  .mobile {
      display: none;
    }
    @media(max-width: 800px) {
      
    }

  @media (max-width: 1000px) {
    flex-wrap:  wrap;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px) {
    align-items: center;
    justify-content: space-between;
      display: flex;
      align-items: center;
      .mobile {
        display: initial;
      }
      > nav {
        display: none;
      }
  }

  @media (max-width: 400px) {
    align-items: center;
    justify-content: space-between;
      display: flex;
      align-items: center;
      .mobile {
        display: initial;
      }
      > nav {
        display: none;
      }
    
  }
`;

export const Link = styled.a`
display: flex;
align-items: center;
`

export const LogoPoke = styled.img.attrs({
  src: `${Logo}`
})`
 width: 157px;
 height: 63px;
 margin-left: 210px;


 @media (max-width: 1000px) {
    flex-wrap:  wrap;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px) {
    margin-left: 0px;
  }

  @media (max-width: 400px) {
    margin-left: 0px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 375px;
  height: 56px;


 
  a {
  color: #18272F;
  position: relative;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: #18272F;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

`;