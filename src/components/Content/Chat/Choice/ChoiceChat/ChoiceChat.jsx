import React from "react";
import s from "./ChoiceChat.module.css";
import ChatAvatar from "./ChatAvatar/ChatAvatar";
import ChatTitle from "./ChatTitle/ChatTitle";
import ChatContent from "./ChatContent/ChatContent";
import { Link } from "react-router-dom";

const ChoiceChat = (props) => {
  let path = "/chat/" + props.id;

  return (
    <Link className={s.choice__chat} to={path}>
      <div className={s["choice-chat__head"]}>
        <ChatAvatar />
        <ChatTitle name={props.name} stat={props.time} time={props.time} />
      </div>
      <ChatContent text={props.text} msg={props.msg} />
    </Link>
  );
};

export default ChoiceChat;
