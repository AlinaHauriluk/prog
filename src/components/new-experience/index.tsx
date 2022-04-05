import React, { useEffect } from "react";
import {
  SectionNewExperience,
  NewExperienceImage,
  NewExperienceImageTwo,
  NewExperienceDescription,
  NewExperienceText,
  NewExperienceIcon,
  NewExperienceTitle,
  NewExperienceContainer,
} from "./new-experience";
import { BlockSubTitle } from "../../text/text";
import { Container } from "../../box/absolute-box";
import { Flex } from "../../box/flex-box";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaPredicate } from "react-media-hook";

const NewExperience = () => {
  const lessThan426 = useMediaPredicate("(max-width: 426px)");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <SectionNewExperience>
      <NewExperienceContainer data-aos="fade-down">
        <Flex>
          <NewExperienceImage />
          <NewExperienceImageTwo />
        </Flex>

        <NewExperienceDescription data-aos="fade-left">
          <BlockSubTitle>Something new</BlockSubTitle>
          <NewExperienceTitle>An Extraordinery Experience</NewExperienceTitle>
          <NewExperienceIcon />
          <NewExperienceText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
            venenatis. Nulla consequat fringilla massa.
          </NewExperienceText>
        </NewExperienceDescription>
        {lessThan426 && (
          <Container data-aos="fade-down">
            <BlockSubTitle>Something new</BlockSubTitle>
            <NewExperienceTitle>An Extraordinery Experience</NewExperienceTitle>
            <NewExperienceText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Ut non justo eleifend, facilisis nibh ut, interdum odio.
              Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae
              aliquet dolor venenatis. Nulla consequat fringilla massa.
            </NewExperienceText>
          </Container>
        )}
      </NewExperienceContainer>
    </SectionNewExperience>
  );
};

export default NewExperience;