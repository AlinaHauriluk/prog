import { useState, useEffect } from "react";
import {
  ProfileFollowersWrapper,
  ProfileFollowersContainer,
  ProfileFollowersFlex,
} from "./profile-followers";
import { TitleProfile } from "../../text/text";
import Avatar from "react-avatar";
import Modale from "../modale";
import AOS from "aos";
import "aos/dist/aos.css";

interface friends {
  id: number;
  name: string;
  age: number;
  current: string;
  like: string;
  places: string;
  modalIsOpen: "none" | "block";
}

const FRIENDS: friends[] = [
  {
    id: 1,
    name: "Kate Smith",
    age: 20,
    current: "years",
    like: "Fish with mushrooms, Steak with mushrooms",
    places: "The Venue Restaurant",
    modalIsOpen: "none",
  },
  {
    id: 2,
    name: "Laura Brown",
    age: 18,
    current: "years",
    like: "Steak with mushrooms, Fish with musroom",
    places: "The Grand Cafe",
    modalIsOpen: "none",
  },
  {
    id: 3,
    name: "Tobby Brown",
    age: 24,
    current: "years",
    like: "Fried Chicken, Fish with mushrooms",
    places: "The Forest Resturant",
    modalIsOpen: "none",
  },
  {
    id: 4,
    name: "Jack Smith",
    age: 24,
    current: "years",
    like: "Steak with vegetables, Fried Chicken",
    places: "The Grand Cafe",
    modalIsOpen: "none",
  },
  {
    id: 5,
    name: "Hellen White",
    age: 28,
    current: "years",
    like: "Fish with mushrooms, Steak with vegetables",
    places: "The Venue Restaurant",
    modalIsOpen: "none",
  },
  {
    id: 6,
    name: "Fred Jackson",
    age: 26,
    current: "years",
    like: "Fried Chicken, Fish with mushrooms",
    places: "The Italy Trattoria",
    modalIsOpen: "none",
  },
  {
    id: 7,
    name: "Jane Air",
    age: 27,
    current: "years",
    like: "Steak with vegetables",
    places: "The Venue Restaurant",
    modalIsOpen: "none",
  },
  {
    id: 8,
    name: "Lavanda Sin",
    age: 29,
    current: "years",
    like: "Desserts, Fish with musroom",
    places: "The Grand Cafe",
    modalIsOpen: "none",
  },
  {
    id: 9,
    name: "Liana Rin",
    age: 23,
    current: "years",
    like: "Steak with vegetables",
    places: "The Venue Restaurant",
    modalIsOpen: "none",
  },
];

const ProfileFollowers = () => {
  const [state, setState] = useState(FRIENDS);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ProfileFollowersContainer>
      <TitleProfile data-aos="zoom-in">Your Friends</TitleProfile>
      <ProfileFollowersFlex>
        {state.map((friend) => (
          <ProfileFollowersWrapper key={friend.id}>
            <Avatar
              style={{border: '2px solid black' }}
              name={friend.name}
              size="80"
              round={true}
              onClick={() => {
                setState((state) =>
                  state.map((item) =>
                    item.id === friend.id
                      ? { ...item, modalIsOpen: "block" }
                      : item
                  )
                );
              }}
            />

            {friend.modalIsOpen === "block" && (
              <Modale
                friend={friend}
                onClick={() => {
                  setState((state) =>
                    state.map((item) =>
                      item.id === friend.id
                        ? { ...item, modalIsOpen: "none" }
                        : item
                    )
                  );
                }}
              />
            )}
          </ProfileFollowersWrapper>
        ))}
      </ProfileFollowersFlex>
    </ProfileFollowersContainer>
  );
};

export default ProfileFollowers;
