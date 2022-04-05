import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;
export const SectionContainer = styled.div`
  padding: 60px 0;
`;
export const BlockDescription = styled.div`
  padding: 30px;
  z-index: 2;
  border: ${({ theme }) => theme.colors.secondary} 3px solid;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonOrder = styled.button`
  display: inline-block;
  padding: 10px 20px;
  letter-spacing: 1.6px;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  border: 2px solid ${({ theme }) => theme.colors.secondary};

  :hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    animation: 3s ${keyframes`${pulse}`} infinite;
  }
`
export const ProfileContainer = styled.div`
  padding: 30px 0;
`;
