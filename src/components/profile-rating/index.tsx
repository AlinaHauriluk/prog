import { useEffect } from "react";
import { TitleProfile } from "../../text/text";
import { ProfileRatingDish, ProfileRatingTitle, ProfileRatingContainer } from "./profile-rating";
import { ProfileContainer, Container } from "../../box/absolute-box";
import Rating from "../rating";
import AOS from "aos";
import "aos/dist/aos.css";

const dishesRating = [
  {
    id: 1,
    title: "Pork Tenderloin marinated",
    photo: `url(${require("../../assets/newDishesImage2.jpg")})`,
  },
  {
    id: 2,
    title: "Beef Tartar with forest mushroms",
    photo: `url(${require("../../assets/newDishesImage1.jpg")})`,
  },
  {
    id: 3,
    title: "Fish Tartar with steamed vegetables",
    photo: `url(${require("../../assets/newDishesImage3.jpg")})`,
  },
];

const ProfileRating = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ProfileContainer>
      <TitleProfile>Rate our Dishes</TitleProfile>
      <Container>
        <ProfileRatingContainer>
          {dishesRating.map((dish) => (
            <div key={dish.id} data-aos="zoom-in">
              <ProfileRatingDish photo={dish.photo}>
                <ProfileRatingTitle>{dish.title}</ProfileRatingTitle>
              </ProfileRatingDish>
              <Rating rating={dish.id} />
            </div>
          ))}
        </ProfileRatingContainer>
      </Container>
    </ProfileContainer>
  );
};

export default ProfileRating;
