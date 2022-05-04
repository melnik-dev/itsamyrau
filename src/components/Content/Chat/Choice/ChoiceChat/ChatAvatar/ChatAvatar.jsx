import React from "react";
import s from "./ChatAvatar.module.css";

const ChatAvatar = () => {
  return (
    <div className={s["choice-chat__avatar"]}>
      <picture>
        <source srcSet="img/hermione.webp" type="image/webp" />
        <img className={s["choice-chat__avatar-img"]} src="img/hermione.jpg" alt="hermione" />
      </picture>
    </div>
  );
};

export default ChatAvatar;
