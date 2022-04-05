import { Widget, addResponseMessage } from "react-chat-widget";
import { ModaleButton } from "../modale/modale";
import "react-chat-widget/lib/styles.css";
import "./chat.css";

const Chat = () => {
  const handleNewUserMessage = (newMessage: string) => {
    console.log(`New message incoming! ${newMessage}`);
    addResponseMessage("Response");
  };

  const getCustomLauncher = (handleToggle: () => void) => (
    <ModaleButton onClick={handleToggle}>Chat</ModaleButton>
  );

  return (
    <>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="The Venue Restaurant Chat"
        subtitle="Welcome"
        showCloseButton={true}
        emojis={true}
        resizable={true}
        launcher={(handleToggle: () => void) => getCustomLauncher(handleToggle)}
      />
    </>
  );
};

export default Chat;
