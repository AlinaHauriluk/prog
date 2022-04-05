import styled, { keyframes } from "styled-components";
import { flash } from "react-animations";
import { FlexJustifyCenter, FlexContainerSpace, FlexStartColumn } from "../../box/flex-box";

export const FooterBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundFooter};
  padding: 50px 0;
`;
export const FooterContainer = styled(FlexContainerSpace)`
  @media(max-width: 1024px){
    flex-direction: column;
  }
`
export const FooterLogo = styled.div`
  margin-right: 30px;
  animation: 8s ${keyframes`${flash}`} infinite;

  @media(max-width: 1024px){
    margin-bottom: 30px;
    display: flex;
  }

  @media(max-width: 321px){
    flex-direction: column;
  }
`;
export const FooterLogoTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  line-height: 0.75;
`;
export const FooterLogoSubTitle = styled.h4`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 8px;
  line-height: 0.75;
  margin-top: 17px;
  margin-left: 5px;

  @media(max-width: 1024px){
    margin-top: 6px;
    margin-left: 15px;
    text-transform: none;
    letter-spacing: 2px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media(max-width: 321px){
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-top: 17px;
    margin-left: 5px;
  }
`;
export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.colorFooter};
  width: 50%;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 18px;
  margin-right: 30px;
  text-align: center;

  @media(max-width: 1024px){
    margin-bottom: 30px;
    width: 90%;
  }
`;
export const FooterList = styled(FlexJustifyCenter)`
  margin-bottom: 10px;

  @media(max-width: 1024px){
    :not(:last-child) {
      margin-right: 20px;
    }
  }

  @media(max-width: 1024px){
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;
export const FooterContactTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  line-height: 21px;
  color: ${({ theme }) => theme.colors.colorFooterContact};
  margin-right: 10px;
`;
export const FooterContactInfo = styled.a`
  font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 21px;
  text-decoration: none;
`;
export const FooterStartColumn = styled(FlexStartColumn)`
  @media(max-width: 1024px){
    flex-direction: row;
  }

  @media(max-width: 426px){
    flex-direction: column;
  }
`
