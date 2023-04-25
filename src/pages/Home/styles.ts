import styled from 'styled-components'
import ImgComplete from '../../assets/BannerComplete.png'

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
`

export const ContentHome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-left: 156px;

  @media (max-width: 1000px) {
    
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding-left: 0px;
  }

  @media (max-width: 400px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding-left: 0px;
  }
  
`

export const ContentSub = styled.div`
  display: flex;
  width: 516px;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 0;

  h1 {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 84px;
    letter-spacing: 4px;
    margin-bottom: 64px;
  }

  h2 {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 64px;
  }


  @media (max-width: 1000px) {
    
    flex-direction: column;
    align-items: flex-start;
  justify-content: space-between;;

    h1 {
      font-size: 52px;
      margin-bottom: 44px;
    }

    h2 {
      font-size: 29px;
      margin-bottom: 44px;
    }
  }

  @media (max-width: 800px) {
    padding-left: 30px;
    padding-top: 35px;
    width: 368px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-family: 'Karla';
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      line-height: 49px;
      text-align: center;
      letter-spacing: 4px;
    }

    h2 {
      font-family: 'Karla';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    padding-left: 36px;
    padding-top: 35px;
  }
`

export const ImgHome = styled.img.attrs({
  // src: `${Homeimg}`
  // src: `${Homeimg}`,
  srcSet: `${ImgComplete} 1x, ${ImgComplete} 2x, ${ImgComplete} 3x`,
})`
  margin-top: 67px;
  width: 793px;
  height: 680px;
 
  @media (max-width: 800px) {
    width: 375px;
    height: 287.05px;
    left: 0%;
    right: 0%;
    top: 12.56%;
    bottom: 52.09%;
  }

  @media (max-width: 400px) {
    width: 375px;
    height: 287.05px;
    left: 0%;
    right: 0%;
    top: 12.56%;
    bottom: 52.09%;
  }
`

export const ButtonHome = styled.button`
  border-radius: 8px;
  color: #212121;
  width: 231px;
  height: 66px;
  font-size: 23px;
  font-weight: 700;
  align-items: center;
  cursor: pointer;

  background: #73D677;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  a {
  color: #18272F;
  text-decoration: none;
  font-size: 1.2rem;
  }

  

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;;
  }

  @media (max-width: 400px) {
    align-items: center;
    justify-content: center;;
  }

`

