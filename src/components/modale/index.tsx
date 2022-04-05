import {
  ModaleWrapper,
  ModaleContext,
  ModaleContainer,
  ModaleTitle,
  ModaleText,
  ModaleTitleMessage,
  ModaleContainerMessage,
} from "./modale";
import { FlexBox } from "../../box/flex-box";
import BlackListToggle from '../black-list-toogle'
import Avatar from "react-avatar";

interface StyleProps {
  onClick: () => void;
  friend: {
    id: number;
    name: string;
    age: number;
    current: string;
    like: string;
    places: string;
    modalIsOpen: "none" | "block";
  };
}

const Modale: React.FC<StyleProps> = ({ friend, onClick }) => {

  const aboutFriend = [
    { id: 1, title: "Name:", description: `${friend.name}`},
    { id: 2, title: "Age:", description: `${friend.age} ${friend.current}` },
    { id: 3, title: "Favorite Dishes:", description: `${friend.like}` },
    { id: 4, title: "Favorite Places:", description: `${friend.places}` },
  ];
  
  return (
    <ModaleWrapper
      onClick={onClick}
    >
      <ModaleContext
        onClick={(event: React.MouseEvent<HTMLDivElement>) =>
          event.stopPropagation()
        }
      >
        <FlexBox>
          <ModaleContainer>
            <Avatar name={friend.name} size="80" round={true} />
            {aboutFriend.map((about) => (
              <div key={about.id}>
                <ModaleTitle>{about.title}</ModaleTitle>
                <ModaleText>{about.description}</ModaleText>
              </div>
            ))}
          </ModaleContainer>
          <ModaleContainerMessage>
            <ModaleTitleMessage>Send Your Message</ModaleTitleMessage>
            <BlackListToggle />
          </ModaleContainerMessage>
        </FlexBox>
      </ModaleContext>
    </ModaleWrapper>
  );
};

export default Modale;