import { useEffect } from "react";
import Rating from "../rating";
import { Container, ButtonOrder } from "../../box/absolute-box";
import { BlockSubTitle } from "../../text/text";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  NewDishesSection,
  NewDishesTitle,
  NewDishesContainer,
  NewDishesWrapper,
  NewDishesName,
  NewDishesPrice,
  NewDishesDescription,
  NewDishesPhoto,
} from "./new-dishes";

const newDishes = [
  {
    id: 1,
    title: "Pork Tenderloin marinated",
    description: "Pork / Tenderloin / Green Pepper / Veggies",
    price: 20,
    current: "USD",
    photo: `url(${require("../../assets/newDishesImage1.jpg")})`,
    rating: 2,
  },
  {
    id: 2,
    title: "Beef Tartar with forest mushroms",
    description: "Pork / Tenderloin / Green Pepper / Veggies",
    price: 23,
    current: "USD",
    photo: `url(${require("../../assets/newDishesImage2.jpg")})`,
    rating: 4,
  },
  {
    id: 3,
    title: "Beef Steak with sauted vegetables",
    description: "Pork / Tenderloin / Green Pepper / Veggies",
    price: 25,
    current: "USD",
    photo: `url(${require("../../assets/newDishesImage3.jpg")})`,
    rating: 3,
  },
];

const NewDishes = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <NewDishesSection>
      <Container>
        <BlockSubTitle>Something new</BlockSubTitle>
        <NewDishesTitle>Our Signature Dishes</NewDishesTitle>
        {newDishes.map((dish) => (
          <NewDishesContainer key={dish.id}>
            <NewDishesWrapper data-aos="fade-right">
              <NewDishesName>
                {dish.title}
                <NewDishesPrice>
                  {dish.price} 
                  {dish.current}
                </NewDishesPrice>
              </NewDishesName>
              <NewDishesDescription>{dish.description}</NewDishesDescription>
              <ButtonOrder>Order now</ButtonOrder>
            </NewDishesWrapper>
            <NewDishesWrapper data-aos="fade-left">
              <NewDishesPhoto photo={dish.photo} />
              <Rating rating={dish.rating} />
            </NewDishesWrapper>
          </NewDishesContainer>
        ))}
      </Container>
    </NewDishesSection>
  );
};

export default NewDishes;
