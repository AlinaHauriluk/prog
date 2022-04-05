import { useEffect } from "react";
import { FlexSpaceBetween } from "../../box/flex-box";
import { BlockSubTitle } from "../../text/text";
import { ButtonOrder } from "../../box/absolute-box";
import Rating from "../rating";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SectionSignatureDish,
  SignatureDishDescription,
  SignatureDishName,
  SignatureDishPrice,
  SignatureDishText,
  SignatureDishImage,
  SignatureDishContainer,
  SignatureDishTitle
} from "./signature-dish";

const SignatureDish = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <SectionSignatureDish>
      <SignatureDishContainer>
        <SignatureDishDescription data-aos="fade-right">
          <BlockSubTitle>Something new</BlockSubTitle>
          <SignatureDishTitle>Our Signature Dish</SignatureDishTitle>
          <Rating rating={2} />
          <FlexSpaceBetween>
            <SignatureDishName>
              Pork Tenderloin marinated in Green Pepper
            </SignatureDishName>
            <SignatureDishPrice>20 USD</SignatureDishPrice>
          </FlexSpaceBetween>

          <SignatureDishText>
            Pork / Tenderloin / Green Pepper / Veggies
          </SignatureDishText>
          <ButtonOrder>Order now</ButtonOrder>
        </SignatureDishDescription>
        <SignatureDishImage data-aos="fade-down" />
      </SignatureDishContainer>
    </SectionSignatureDish>
  );
};

export default SignatureDish;
