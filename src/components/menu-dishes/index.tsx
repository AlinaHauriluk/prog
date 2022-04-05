import { useEffect } from "react";
import { Container } from "../../box/absolute-box";
import SomethingNew from "../../components/something-new";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MenuDishesSection,
  MenuDishesContainer,
  MenuDishesPhoto,
} from "./menu-dishes";

const dishesPhoto = [
  { id: 1, photo: `url(${require("../../assets/menuDishesStarters.jpg")})` },
  { id: 2, photo: `url(${require("../../assets/menuDishesMain.jpg")})` },
  { id: 3, photo: `url(${require("../../assets/menuDishesDeserts.jpg")})` },
];

const MenuDishes = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <MenuDishesSection>
      <Container>
        <SomethingNew
          title="Discover Our Menu"
          descriptionPartOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla."
          descriptionPartTwo="Sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla."
        />
        <MenuDishesContainer>
          {dishesPhoto.map((dish) => (
            <MenuDishesPhoto
              key={dish.id}
              photo={dish.photo}
              data-aos="zoom-in"
            />
          ))}
        </MenuDishesContainer>
      </Container>
    </MenuDishesSection>
  );
};

export default MenuDishes;
