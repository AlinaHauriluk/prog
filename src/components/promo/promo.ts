import styled from "styled-components";
import { SubTitle, Title } from "../../text/text";

export const PromoSection = styled.div` 
  background-image: url(${require("../../assets/homePromoImage.jpg")});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const TitlePromo = styled(Title)`
  margin-bottom: 30px;
  letter-spacing: 2.8px;

  @media(max-width: 768px){
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;
export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  width: 80%;
  text-align: center;

  @media(min-width: 2560px) {
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }

  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  }
`;
export const SubTitlePromo = styled(SubTitle)`
  margin-top: 80px;
  font-weight: bold;
  line-height: 0.75;
  margin-bottom: 45px;
  font-size: ${({ theme }) => theme.fontSize.title};

  @media(max-width: 426px){
    margin-top: 95px;
  }
`;
