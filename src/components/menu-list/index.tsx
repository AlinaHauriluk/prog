import type {FC} from "react";
import { useEffect } from "react";
import { BlockSubTitle } from "../../text/text";
import Rating from "../rating";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MenuContainer,
  MenuWrapper,
  MenuWrapperTitle,
  MenuTitle,
  MenuPart,
  MenuPartTitle,
  MenuListContainer,
  MenuListWrapper,
  DishName,
  DishPrice,
  DishDescription,
  DishOrder,
  MenuWrapperContainer,
  MenuFlex
} from "./menu-list";

interface MenuProps {
  title?: string;
  subtitle?: string;
}

const data = [
  {
    id: 1,
    title: "Starters",
    dishes: [
      {
        id: 1,
        name: "Pork Tenderloin",
        price: 20,
        currency: "USD",
        description: "Pork / Tenderloin / Green Pepper / Veggies",
      },
    ],
  },
  {
    id: 2,
    title: "Main",
    dishes: [
      {
        id: 2,
        name: "Chicken with lemon",
        price: 20,
        currency: "USD",
        description: "Pork / Tenderloin / Green Pepper / Veggies",
      },
    ],
  },
  {
    id: 3,
    title: "Desserts",
    dishes: [
      {
        id: 3,
        name: "Lava cake",
        price: 15,
        currency: "USD",
        description: "Pork / Tenderloin / Green Pepper / Veggies",
      },
    ],
  },
];

const MenuList:FC<MenuProps> = ({ title, subtitle }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <MenuContainer>
      <MenuWrapperContainer>
        {title && subtitle && (
          <MenuWrapper data-aos="flip-down">
            <MenuWrapperTitle>
              <BlockSubTitle>{subtitle}</BlockSubTitle>
              <Rating rating={1} />
              <MenuTitle>{title}</MenuTitle>
            </MenuWrapperTitle>
          </MenuWrapper>
        )}

        <MenuFlex>
          {data.map((item) => (
            <MenuPart key={item.id} data-aos="fade-down">
              <MenuPartTitle>{item.title}</MenuPartTitle>
              {item.dishes.map((dish) => (
                <MenuListContainer key={dish.id}>
                  <MenuListWrapper>
                    <DishName>{dish.name}</DishName>
                    <DishPrice>
                      {dish.price} {dish.currency}
                    </DishPrice>
                  </MenuListWrapper>
                  <DishDescription>{dish.description}</DishDescription>
                  <DishOrder>Order now</DishOrder>
                </MenuListContainer>
              ))}
            </MenuPart>
          ))}
        </MenuFlex>
      </MenuWrapperContainer>
    </MenuContainer>
  );
};

export default MenuList;
