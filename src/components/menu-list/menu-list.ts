import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import { SectionContainer, Container } from "../../box/absolute-box";
import {
  FlexCenter,
  FlexSpaceBetween,
  FlexJustifyCenter,
} from "../../box/flex-box";

export const MenuContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.backgroundSection};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`;
export const MenuWrapperContainer = styled(Container)`
  @media (max-width: 426px) {
    width: 95%;
  }
`;
export const MenuWrapper = styled(FlexCenter)`
  height: 200px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
`;
export const MenuFlex = styled(FlexJustifyCenter)`
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
export const MenuWrapperTitle = styled.div`
  width: 96%;
  padding: 20px 0;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  text-align: center;

  @media (max-width: 426px) {
    padding: 30px 0;
  }
`;
export const MenuTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  letter-spacing: 1.8px;

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;
export const MenuPart = styled.div`
  width: calc(33% - 30px);
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};

  :not(:last-child) {
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    width: 70%;
    margin-left: auto;

    :not(:first-child) {
      margin-top: 20px;
    }

    :not(:last-child) {
      margin-right: auto;
    }

    :last-child {
      margin-right: auto;
    }
  }

  @media (max-width: 376px) {
    width: 80%;
  }
`;
export const MenuPartTitle = styled(FlexCenter)`
  display: inline-block;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  width: 40%;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  letter-spacing: 1.8px;
  font-weight: 600;
  margin-bottom: 20px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.backgroundSectionTwo};
  animation: 6s ${keyframes`${pulse}`} infinite;

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media (max-width: 768px) {
    width: 20%;
  }

  @media (max-width: 426px) {
    width: 35%;
  }

  @media (max-width: 376px) {
    width: 40%;
  }
`;

export const MenuListContainer = styled.div`
  margin-bottom: 20px;
`;

export const MenuListWrapper = styled(FlexSpaceBetween)`
  margin-bottom: 10px;
`;
export const DishName = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.medium};
  letter-spacing: 1.6px;

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  }
`;
export const DishPrice = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  color: ${({ theme }) => theme.colors.colorText};

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  }

  @media (max-width: 768px) {
    display: inline-block;
    margin-right: 40px;
  }

  @media (max-width: 426px) {
    margin-right: 0;
  }
`;
export const DishDescription = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: 1.6px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.colorText};
  margin-bottom: 20px;
`;
export const DishOrder = styled.button`
  display: inline-block;
  padding-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 1.6px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.transparent};
  text-transform: capitalize;
  border-bottom: 1px solid ${({ theme }) => theme.colors.transparent};

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    animation: 3s ${keyframes`${pulse}`} infinite;
  }
`;
