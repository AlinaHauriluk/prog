import styled from "styled-components";
import { FlexSpaceBetween } from "../../box/flex-box";
import { ModaleTitle } from "../modale/modale";

export const ToggleContainer = styled(FlexSpaceBetween)`
  margin: 30px 0;

  @media(max-width: 426px){
    flex-direction: column;
  }
`
export const BlackListTitle = styled(ModaleTitle)`
  margin: 0;
  @media(max-width: 426px){
    font-size: ${({theme}) => theme.fontSize.medium};
    margin-bottom: 10px;
  }
`
export const BlackListText = styled.h3`
  font-size: ${({theme}) => theme.fontSize.mediumLarge};
  font-weight: 600;
  margin-bottom: 40px;

  @media(max-width: 426px){
    font-size: ${({theme}) => theme.fontSize.medium};
    margin-left: 10px;
  }
`