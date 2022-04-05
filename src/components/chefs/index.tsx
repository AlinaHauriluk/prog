import { useEffect } from "react";
import { ChefSection, ChefWrapper } from "./chefs";
import { Container } from "../../box/absolute-box";
import SomethingNew from "../something-new";
import ChefsInfo from '../chefs-info'
import AOS from "aos";
import "aos/dist/aos.css";

const chefData = [
  {
    id: 1,
    photo: `url(${require("../../assets/aboutChef1Image.jpg")})`,
    name: "Maria Smith",
    position: "Top Chef",
  },
  {
    id: 2,
    photo: `url(${require("../../assets/aboutChef2Image.jpg")})`,
    name: "William Jones",
    position: "Sauce Chef",
  },
  {
    id: 3,
    photo: `url(${require("../../assets/aboutChef3Image.jpg")})`,
    name: "Julien Williams",
    position: "Sushi Chef",
  },
  {
    id: 4,
    photo: `url(${require("../../assets/aboutChef4Image.jpg")})`,
    name: "Suzie James",
    position: "Sauce Chef",
  },
];

const Chefs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ChefSection>
      <Container>
        <SomethingNew
          title="Meet the Chefs"
          descriptionPartOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
              Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
              justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
              potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
              venenatis. Nulla consequat fringilla."
          descriptionPartTwo="Sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus
              mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.
              Suspendisse cursus faucibus finibus. Ut non justo eleifend,
              facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus
              luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla
              consequat fringilla."
        />
        <ChefWrapper>
          <ChefsInfo chefs={chefData} />
        </ChefWrapper>
      </Container>
    </ChefSection>
  );
};
export default Chefs;
