import styled from "styled-components";
import { TextareaForm } from "../../box/form";
import { FlexSpaceBetween, Flex } from "../../box/flex-box";

export const ProfileTestimonialsWrapper = styled.div`
  width: 50%;

  @media(max-width: 768px){
    width: 100%;
  }
`
export const ProfileTestimonialsContainer = styled(FlexSpaceBetween)`
  @media(max-width: 768px){
    flex-direction: column-reverse;
  }
`
export const ProfileTestimonialsPhoto = styled.div`
  background-image: url(${require("../../assets/profileTestimonialsImage.jpg")});
  width: 340px;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  margin-left: auto;

  @media(max-width: 768px){
    width: 340px;
    height: 200px;
    margin: 0 auto;
  }
`
export const FormWrapper = styled(Flex)`
  flex-direction: column;
  @media(max-width: 768px){
    margin-top: 30px;
  }
`
export const ProfileTestimonialsTextarea = styled(TextareaForm)`
  width: 80%;
  margin-left: 50px; 
  background: url(${require("../../assets/profileTestimonialIcon.png")});
  background-repeat: no-repeat;
  background-size: 15%; 
  background-position: 10% 50%;

  @media(max-width: 1024px){
    margin: 0;
  }

  @media(max-width: 436px){
    background-position: 10% 20%;

    ::placeholder{
      padding-top: 80px;
    }
  }
`