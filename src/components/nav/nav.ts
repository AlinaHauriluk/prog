import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import { Link } from "react-router-dom";
import { FlexCenter } from "../../box/flex-box";

export const List = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const ListItem = styled.li`
  margin-right: 35px;
`;

export const Menu = styled(FlexCenter)`
  position: fixed;
  top: 30px;
  left: 85%;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    left: 88%;
  }

  @media (max-width: 426px) {
    left: 85%;
    top: 25px;
  }

  @media (max-width: 376px) {
    top: 35px;
  }

  @media (max-width: 321px) {
    left: 80%;
  }
`;
export const MenuItem = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};

  ::after {
    content: "";
    top: 8px;
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  ::before {
    content: "";
    top: -8px;
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
export const PageLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontFamily.promo};
  display: inline-block;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
    animation: 3s ${keyframes`${pulse}`} infinite;
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  top: 85px;
  z-index: 4;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  width: 23%;
  padding: 20px 10px;
  display: none;

  &.active {
    display: block;
  }

  @media (max-width: 762px) {
    width: 25%;
  }

  @media (max-width: 426px) {
    width: 35%;
    padding: 5px;
  }

  @media (max-width: 376px) {
    width: 40%;
  }

  @media (max-width: 321px) {
    width: 45%;
  }
`;
export const MenuTitle = styled.div`
  margin: 30px 0;
  padding-left: 50px;

  @media (max-width: 426px) {
    padding-left: 30px;
  }
`;
export const MenuLink = styled(PageLink)`
  letter-spacing: 2.2px;
  font-weight: 400;

  @media (max-width: 762px) {
    font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  }
`;
