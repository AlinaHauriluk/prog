import styled from "styled-components";
import { Input } from "../../box/form";
import { ProfileContainer } from "../../box/absolute-box";
import { FlexSpaceBetween } from "../../box/flex-box";

export const ProfileOrderContainer = styled(ProfileContainer)`
  background-image: url(${require("../../assets/profileOrderImage.jpg")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
`
export const ProfileWrapper = styled(FlexSpaceBetween)`
  @media(max-width: 1024px){
    flex-direction: column;
  }
`
export const ProfileOrderInput = styled(Input)`
  background-color: ${({ theme }) => theme.colors.backgroundSectionTwo};
  padding: 10px; 
  color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;

  :placeholder{
    font-size: ${({ theme }) => theme.fontSize.medium};
    text-align: center;
  }

  @media(max-width: 1024px){
    width: 60%;
    :not(:first-child){
      margin-top: 20px;
    }
  }

  @media(max-width: 426px){
    width: 80%;
  }
`
export const ProfileOrderWrapper = styled.div`
  width: 90%;
  margin: 40px auto 0 auto;
`
export const ProfileOrderAdress = styled(ProfileOrderInput)`
  width: calc(100% - 34px);
  padding: 15px; 
`