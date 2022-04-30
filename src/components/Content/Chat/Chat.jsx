import React from "react";
import Choice from "./Choice/Choice";
import Chats from "./Chats/Chats";
import s from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={s.content__wrapper}>
      <Choice />
      <Chats />
    </div>
  );
};

export default Chat;
