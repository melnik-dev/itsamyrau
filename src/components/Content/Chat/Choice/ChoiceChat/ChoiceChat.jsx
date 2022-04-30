import React from "react";
import s from "./ChoiceChat.module.css";
import ChatAvatar from "./ChatAvatar/ChatAvatar";
import ChatTitle from "./ChatTitle/ChatTitle";
import ChatContent from "./ChatContent/ChatContent";

const ChoiceChat = () => {
  return (
    <div className={s.choice__chat}>
      <div className={s["choice-chat__head"]}>
        <ChatAvatar />
        <ChatTitle name="Hermione Granger" stat="writes..." time="1 minute ago" />
      </div>
      <ChatContent text="Hello how are you" msg="2" />
    </div>
  );
};

export default ChoiceChat;
