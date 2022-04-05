import styled from "styled-components";
import { SectionContainer, Container } from "../../box/absolute-box";
import 'react-tabs/style/react-tabs.css';
import { Tabs, Tab, TabList } from "react-tabs";

export const ProfileSection = styled(SectionContainer)`
  background-color: ${({theme}) => theme.colors.backgroundSectionTwo};
  @media(max-width: 426px){
    padding: 30px 0;
  }
`
export const ProfileTabList = styled(TabList)`
  @media(max-width: 426px){
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
  }
`
export const ProfileContainer = styled(Container)`
  @media(max-width: 426px){
    width: 90%;
  }
`
export const ProfileTabs = styled(Tabs)`
  background-color: ${({theme}) => theme.colors.primary};
`
export const ProfileTab = styled(Tab)`
  color: ${({theme}) => theme.colors.secondary};
  display: inline-block;
  padding: 20px 5px;
  font-weight: bold;
  font-size: ${({theme}) => theme.fontSize.mediumMedium};
  margin-right: 80px;
  cursor: pointer;
  font-family: ${({theme}) => theme.fontFamily.cursiv};
  letter-spacing: 2.2px;

  :first-child {
    margin-left: 60px;
  }

  @media(max-width: 1024px){
    margin-right: 30px;
    :first-child {
      margin-left: 20px;
    }
  }

  @media(max-width: 768px){
    margin-right: 20px;
    font-size: ${({theme}) => theme.fontSize.mediumSmall};
  }

  @media(max-width: 426px){
    :first-child {
      margin-left: 0;
    }
  }

`