import React from "react";
import s from "./ChatContent.module.css";

const ChatContent = (props) => {
  return (
    <div className={s["choice-chat__content"]}>
      <span className={s["choice-chat__content-text"]}>{props.text}</span>
      <span className={s["choice-chat__content-msg"]}>{props.msg} </span>
    </div>
  );
};

export default ChatContent;
