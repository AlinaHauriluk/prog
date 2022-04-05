import styled, { keyframes } from "styled-components";
import { flipInX, swing } from "react-animations";
import { Container } from "../../box/absolute-box";

export const HeaderSection = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 70px;
  position: fixed;
  padding-top: 20px;
  z-index: 4;
`;
export const HeaderContainer = styled(Container)`
  @media (max-width: 426px) {
    width: 100%;
  }
`;
export const LogoTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: 0.75;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 426px) {
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }
`;
export const LogoSubtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 8px;
  line-height: 0.75;
  margin-top: 12px;
  padding-left: 5px;

  @media (max-width: 426px) {
    letter-spacing: 2px;
    text-transform: none;
  }
`;
export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 15px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.transparent};
  line-height: 0.65;
  font-size: ${({ theme }) => theme.fontSize.medium};
  display: inline-block;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    animation: 5s ${keyframes`${swing}`} infinite;
  }

  @media (max-width: 426px) {
    font-size: ${({ theme }) => theme.fontSize.mediumSmall};
    padding: 5px 10px;
  }
`;
export const ButtonSecondary = styled(Button)`
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }

  @media (max-width: 426px) {
    margin-left: 20px;
  }

  @media (max-width: 376px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const FlipInX = styled.div`
  animation: 8s ${keyframes`${flipInX}`} infinite;

  @media (max-width: 426px) {
    margin-left: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  @media (max-width: 1024px) {
    margin-right: 95px;
  }

  @media (max-width: 768px) {
    margin-right: 90px;
  }

  @media (max-width: 426px) {
    margin-right: auto;
    margin-left: 40px;
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    margin-left: 80px;
  }

  @media (max-width: 321px) {
    margin-left: 40px;
  }
`;
