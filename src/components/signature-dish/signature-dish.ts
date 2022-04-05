import styled from "styled-components";
import { SectionContainer, BlockDescription } from "../../box/absolute-box";
import {FlexContainer} from "../../box/flex-box"
import { BlockTitle } from "../../text/text";

export const SectionSignatureDish = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.backgroundSectionTwo};
`;
export const SignatureDishContainer = styled(FlexContainer)`
  @media(max-width: 768px){
    flex-direction: column-reverse;
  }

  @media(max-width: 426px){
    width: 100%;
  }
`
export const SignatureDishDescription = styled(BlockDescription)`
  margin-right: -80px;
  margin-bottom: -60px;
  width: 50%;

  @media(min-width: 2560px){
    width: 40%; 
  }

  @media(max-width: 1024px){
    width: 60%; 
    margin-right: -40px;
    padding: 10px;
  }

  @media(max-width: 768px){
    margin-top: -80px;
    margin-bottom: -10px;
    margin-right: -20px;
    width: 80%; 
  }

  @media(max-width: 426px){
    padding: 15px; 
    margin-top: -60px;
    margin-right: 0px;
    width: 90%; 
  }

  @media(max-width: 376px){
    padding: 10px; 
  }
`;
export const SignatureDishImage = styled.div`
  background-image: url(${require("../../assets/homeSignatureDishImage.jpg")});
  width: 550px;
  height: 550px;
  margin-left: auto;
  background-position: center;
  background-repeat: no-repeat;

  @media(min-width: 2560px){
    width: 900px;
    height: 600px;
  }

  @media(max-width: 1024px){
    width: 400px;
    height: 400px;
  }

  @media(max-width: 768px){
    width: 500px;
    height: 300px;
  }

  @media(max-width: 426px){
    width: 380px;
    height: 300px;
    margin-left: 0;
  }

  @media(max-width: 376px){
    width: 330px;
  }

  @media(max-width: 321px){
    width: 310px;
  }
`;
export const SignatureDishTitle = styled(BlockTitle)`
  @media(max-width: 1024px){
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }

  @media(max-width: 426px){
    margin-bottom: 0;
  }
`
export const SignatureDishName = styled.h3`
  letter-spacing: 1.2px;
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.mediumLarge};
    margin-bottom: 20px;
  }

  @media(max-width: 1024px){
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media(max-width: 426px){
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  }
`;
export const SignatureDishPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  font-weight: 600;
  display: inline-block;

  @media(min-width: 2560px){
    margin: 0 auto 20px 40px;
  }

  @media(max-width: 1024px){
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media(max-width: 426px){
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
export const SignatureDishText = styled.p`
  letter-spacing: 1.6px;
  margin-bottom: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.colorText};

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }

  @media(max-width: 1024px){
    font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  }

  @media(max-width: 426px){
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: -5px; 
  }
`;