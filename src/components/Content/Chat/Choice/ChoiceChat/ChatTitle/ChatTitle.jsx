import React from "react";
import s from "./ChatTitle.module.css";

const ChatTitle = (props) => {
  return (
    <div className={s["choice-chat__title-wrapp"]}>
      <div className={s["choice-chat__title"]}>
        <h4 className={s["choice-chat__name"]}>{props.name}</h4>
        <span className={s["choice-chat__stat"]}>{props.stat}</span>
      </div>
      <span className={s["choice-chat__time"]}>{props.time}</span>
    </div>
  );
};

export default ChatTitle;
