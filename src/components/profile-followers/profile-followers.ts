import styled from "styled-components";
import { BlockDescription } from "../../box/absolute-box";
import { ProfileContainer } from "../../box/absolute-box";
import { FlexContainer } from "../../box/flex-box";

export const ProfileFollowersContainer = styled(ProfileContainer)`
  background-image: url(${require("../../assets/aboutTestimonialsImage.jpg")});
  background-position: 50% 100%;
  background-size: cover;
  margin-top: -10px;
`
export const ProfileFollowersFlex = styled(FlexContainer)`
  flex-wrap: wrap;
  width: 60%;
  @media(max-width: 1024px){
    width: 80%;
  }

  @media(max-width: 376px){
    width: 70%;
  }

  @media(max-width: 321px){
    width: 80%;
  }
`
export const ProfileFollowersWrapper = styled.div`
  width: 50px;
  margin-bottom: 30px;
  margin-right: 20px;

  @media(max-width: 376px){
    width: 40px;
    margin-right: 10px;
  }
`
export const ProfileFollowersModale = styled(BlockDescription)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform:translate(-50%, -50%);
`



