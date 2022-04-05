import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import { FlexCenter } from "../../box/flex-box";
import { SectionContainer, ButtonOrder, Container } from "../../box/absolute-box";

export const CartListSection = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.backgroundSectionTwo};
`;
export const CartListContainer = styled(Container)`
  @media(max-width: 426px){
    width: 100%;
  } 
`
export const CartListTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media(max-width: 426px){
    width: 95%;
    margin: 0 auto;
  } 
`;
export const CartListTableSection = styled.tr`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-bottom: 35px solid ${({ theme }) => theme.colors.backgroundSectionTwo};
  text-align: center;
`;
export const CartListTableItem = styled.th`
  padding: 15px 40px 15px 10px;
  border: none;
  position: relative;

  @media(max-width: 426px){
    padding: 5px 0px 5px 5px;
  }
`;
export const CartListTableTitle = styled(CartListTableItem)`
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  font-family: ${({ theme }) => theme.fontFamily.cursiv};
  color: ${({ theme }) => theme.colors.secondary};

  @media(max-width: 426px){
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;
export const CartListProductPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  display: inline-block;
  width: 70px;

  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.fontSize.mediumSmall};
    width: 50px;
  }

  @media(max-width: 426px){
    width: 20px;
    font-size: ${({ theme }) => theme.fontSize.small};
    margin-right: 20px;
  }
`;
export const CartListProductCounter = styled.input`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  outline: none;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600px;
  cursor: pointer;

  :placeholder {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 600px;
  }

  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.fontSize.mediumSmall};
    width: 30px;
    height: 20px;
  }

  @media(max-width: 426px){
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
export const TitleCart = styled.h3`
  text-align: center;
  margin: 20px 0;
  font-family: ${({ theme }) => theme.fontFamily.cursiv};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const CloseButton = styled(FlexCenter)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  cursor: pointer;
  top: -5%;
  right: -10%;
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    animation: 8s ${keyframes`${pulse}`} infinite;
    color: ${({ theme }) => theme.colors.colorText};
  }

  ::before {
    content: "\u2718";
  }
`;
export const CartListButton = styled(ButtonOrder)`
  margin: 0 auto;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;
export const Total = styled(FlexCenter)`
  width: 240px;
  height: 60px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  font-weight: 600px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
  font-family: ${({ theme }) => theme.fontFamily.cursiv};

  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
    width: 180px;
  }
`;
export const TotalPrice = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.fontFamily.promo};
`;
