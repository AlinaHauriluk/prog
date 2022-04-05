import styled from "styled-components";
import { BlockSubTitle } from "../../text/text";
import { FlexCenter } from "../../box/flex-box";

export const TestimonialsSection = styled.div`
  height: 420px;
  background-image: url(${require("../../assets/aboutTestimonialsImage.jpg")});
  background-position: 50% 100%;
  background-repat: no-repeat;
  background-size: cover;
  padding: 30px 0;

  @media(max-width: 426px){
    padding-bottom: 50px;
  }

  @media(max-width: 321px){
    padding-bottom: 90px;
  }
`;
export const TestimonialsSubTitle = styled(BlockSubTitle)`
  margin: 30px 0;
  letter-spacing: 1.8px;
  text-align: center;
`;
export const TestimonialsTitle = styled(FlexCenter)`
  width: 18%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 0 auto 50px auto;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.large};

  @media(max-width: 1024px){
    width: 24%;
  }

  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
    letter-spacing: 4px;
  }

  @media(max-width: 426px){
    font-size: ${({ theme }) => theme.fontSize.medium};
    letter-spacing: 2px;
    width: 35%;
    margin-bottom: 30px;
  }

  @media(max-width: 376px){
    width: 40%;
  }

  @media(max-width: 321px){
    width: 50%;
  }
`;
export const TestimonialsQuote = styled.div`
  margin: 0 auto;
  width: 30px;
  height: 30px;
  background-image: url(${require("../../assets/aboutQuoteImage.png")});
  background-repeat: no-repeat;
`;
export const TestimonialsText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.colorText};
  line-height: 1.8;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 30px;

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }
`;
export const TestimonialsClientName = styled.h4`
  font-family: "Sedgwick Ave", cursive;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }
`;
export const TestimonialsClient = styled.span`
  color: ${({ theme }) => theme.colors.colorText};
  font-size: ${({ theme }) => theme.fontSize.small};
  display: inline-block;
  margin-left: 10px;

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;
