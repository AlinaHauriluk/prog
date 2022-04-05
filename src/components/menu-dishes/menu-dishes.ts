import styled from "styled-components"
import { FlexSpaceBetween } from "../../box/flex-box"

export const MenuDishesSection = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundSection};
  padding-top: 60px;
`
export const MenuDishesContainer = styled(FlexSpaceBetween)`
  margin-top: 40px;

  @media(max-width: 426px){
    flex-direction: column;
  } 
`
export const MenuDishesPhoto = styled.div<{photo: string}>`
  width: 33.3%;
  background-image: ${props => props.photo};
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;

  :not(:last-child){
    margin-right: 30px;
  }

  @media(min-width: 2560px){
    height: 500px;
  } 

  @media(max-width: 2560px){
    height: 200px;
  } 

  @media(max-width: 768px){
    height: 150px;
  } 

  @media(max-width: 426px){
    width: 100%;
    height: 300px;

    :not(:last-child){
      margin-right: 0;
      margin-bottom: 30px;
    }
  } 

  @media(max-width: 376px){
    width: 90%;
    height: 250px;
  } 

  @media(max-width: 321px){
    height: 200px;
  } 

`