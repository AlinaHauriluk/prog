import styled from "styled-components";
import { FlexSpaceBetween } from "../../box/flex-box";
import { SectionContainer } from "../../box/absolute-box";

export const NewDishesSection = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.primary};

  @media(max-width: 426px){
    padding-bottom: 40px;
  }
`;
export const NewDishesTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  line-height: 0.75;
  font-weight: 400;
  margin-bottom: 65px;
`;
export const NewDishesContainer = styled(FlexSpaceBetween)`
  :not(:last-child) {
    margin-bottom: 40px;
  }

  @media(max-width: 768px){
    flex-direction: column;
  }
`;
export const NewDishesWrapper = styled.div`
  width: 50%;

  @media(max-width: 1024px){
   :last-child{
     margin-left: 30px;
     width: 40%;
   }
   :first-child{
    width: 55%;
   }
  } 

  @media(max-width: 768px){
    :last-child{
      margin-left: 0;
      width: 70%;
    }
    :first-child{
     width: 100%;
     margin-bottom: 20px;
     margin-top: 30px;
    }
  }

  @media(max-width: 426px){
    :last-child{
      width: 80%;
      margin-right: auto;
    }
    :first-child{
      margin-top: 20px;
     }
  }

  @media(max-width: 376px){
    :last-child{
      width: 78%;
    }
  }

  @media(max-width: 321px){
    :last-child{
      width: 70%;
    }
  }
`;
export const NewDishesPhoto = styled.div<{ photo: string }>`
  width: 100%;
  height: 200px;
  background-image: ${(props) => props.photo};
  background-size: cover;

  @media(min-width: 2560px){
    height: 300px;
  } 

  @media(max-width: 1024px){
    height: 180px;
  } 

  @media(max-width: 426px){
    height: 150px;
  } 

  @media(max-width: 426px){
    height: 120px;
  } 

  @media(max-width: 321px){
    height: 100px;
  }
`;
export const NewDishesName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  letter-spacing: 1.2px;
  margin-top: -40px;
  margin-bottom: 40px;

  @media(max-width: 426px){
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin-bottom: 20px;
  } 
`;
export const NewDishesDescription = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.smallMedium};
  text-align: left;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.colorText};
  letter-spacing: 1.6px;
  margin-bottom: 40px;

  @media(max-width: 426px){
    font-size: ${({ theme }) => theme.fontSize.small};
    margin-bottom: 25px;
  } 
`;

export const NewDishesPrice = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  display: inline-block;
  margin-left: 20px;

  @media(max-width: 426px){
    margin-left: 0;
    display: block;
    margin-top: 10px;
  } 
`;
