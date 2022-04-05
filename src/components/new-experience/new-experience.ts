import styled from "styled-components";
import { SectionContainer, BlockDescription } from "../../box/absolute-box";
import { FlexContainer } from "../../box/flex-box";
import { BlockTitle } from "../../text/text";

export const SectionNewExperience = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.backgroundSection};
`;
export const NewExperienceContainer = styled(FlexContainer)`
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;
export const NewExperienceImage = styled.div`
  background-image: url(${require("../../assets/homeNewExperienceImage1.jpg")});
  height: 500px;
  width: 350px;
  background-position: 30% 20%;
  margin-right: 30px;

  @media (min-width: 2560px) {
    margin-right: 50px;
    height: 600px;
    width: 500px;
  }

  @media (max-width: 1024px) {
    height: 400px;
    width: 250px;
    margin-right: 10px;
    background-position: 20% 20%;
  }

  @media (max-width: 768px) {
    background-position: 20% 45%;
    width: 300px;
    :first-child {
      margin-left: -5px;
    }
  }

  @media (max-width: 426px) {
    height: 400px;
    width: 210px;
    margin-right: 0;
    background-position: 25% 40%;
    margin-bottom: 30px;
  }

  @media (max-width: 376px) {
    height: 350px;
    width: 180px;
  }

  @media (max-width: 321px) {
    height: 350px;
    width: 160px;
    background-position: 30% 50%;
  }
`;
export const NewExperienceImageTwo = styled(NewExperienceImage)`
  background-image: url(${require("../../assets/homeNewExperienceImage2.jpg")});
  background-position: 90% 138%;

  @media (max-width: 1024px) {
    background-position: 70% 120%;
  }

  @media (max-width: 426px) {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 321px) {
    background-position: 60% 110%;
  }
`;
export const NewExperienceDescription = styled(BlockDescription)`
  margin-left: -80px;
  margin-bottom: -80px;

  @media (min-width: 2560px) {
    width: 45%;
    margin-left: 50px;
  }

  @media (max-width: 1024px) {
    padding: 10px;
    margin-left: -40px;
    margin-bottom: -60px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: -10px;
    margin-top: -60px;
    width: 70%;
  }

  @media (max-width: 426px) {
    display: none;
  }
`;
export const NewExperienceText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  font-weight: 600;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.colors.colorText};

  @media (min-width: 2560px) {
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  @media (max-width: 426px) {
    text-align: justify;
  }
`;
export const NewExperienceIcon = styled.div`
  float: left;
  shape-outside: circle();
  clip-path: circle();
  width: 80px;
  height: 80px;
  background-image: url(${require("../../assets/homeNewExperienceIcon.png")});
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;

  @media (min-width: 2560px) {
    width: 90px;
    height: 90px;
  }
`;
export const NewExperienceTitle = styled(BlockTitle)`
  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
    font-weight: 500;
  }
`;
