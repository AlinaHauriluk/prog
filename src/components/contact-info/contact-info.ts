import styled from "styled-components";
import { SectionContainer } from "../../box/absolute-box";
import { FlexJustifyCenter, FlexSpaceBetween } from "../../box/flex-box";

export const ContactInfoSection = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const ContactInfoWrapper = styled(FlexSpaceBetween)`
  @media(max-width: 768px){
    flex-direction: column;
    margin-top: -30px;
  }
`
export const ContactInfoWrapperLeft = styled.div`
  width: 50%;

  @media(max-width: 768px){
    width: 100%;
  }
`;
export const ContactInfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: left;
  text-align: justify;
  color: ${({ theme }) => theme.colors.colorText};
  letter-spacing: 1.8px;
  margin: 40px 0;

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media(max-width: 1024px){
    text-align: left;
  }
`;
export const ContactInfoSubtitleLogo = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-transform: uppercase;
  letter-spacing: 8px;
  line-height: 0.75;
  margin-left: 5px;
`;
export const ContactInfoWrapperRight = styled.div`
  width: 35%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 20px;

  @media(max-width: 1024px){
    width: 38%;
    padding: 15px;
    margin-top: -50px;
  }

  @media(max-width: 768px){
    margin-top: 30px;
    width: 50%;
  }

  @media(max-width: 426px){
    width: 80%;
  }

  @media(max-width: 321px){
    width: 100%;
  }
`;
export const LogoContainer = styled.div`
  @media(max-width: 768px){
    width: 100%;
    text-align: center;
    display: inline-block;
  }
`
export const ContactInfoContainer = styled(FlexJustifyCenter)`
  margin-bottom: 10px;
`
export const ContactInfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 21px;
  color: ${({ theme }) => theme.colors.colorFooterContact};
  margin-right: 10px;

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }
`
export const ContactInfoDescription = styled.a`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 21px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.colorText};

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }
`

