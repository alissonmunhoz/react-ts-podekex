import styled, { css } from "styled-components";

export const Container = styled.section`
  position: absolute;
  height: 344px;
  border-radius: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(245,216,19);
  background: linear-gradient(180deg, rgba(245,216,19,1) 35%, rgba(242,184,7,1) 100%);
  /* opacity: 0;  */
  pointer-events: none;
  transform: translateY(-100%);
  transition: .5s;
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
    
    a {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        line-height: 32px;
        /* identical to box height */
        text-decoration: none;
        text-align: center;
        color: #000000;
        text-shadow: 4px 4px 20px rgba(1, 28, 64, 0.2);
    }
  }
  ${({ isVisible }) => isVisible && css`
    /* opacity: 1; */
    pointer-events: auto;
    transform: translateY(0);
    > svg {
      transform: rotate(0deg);
    }
    nav {
      transform: scale(1);
    }
  `}

  @media (max-width: 800px) {
    width: 100%
  }
`;