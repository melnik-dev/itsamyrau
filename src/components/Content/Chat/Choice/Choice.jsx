import React from "react";
import s from "./Choice.module.css";
import ChoiceChat from "./ChoiceChat/ChoiceChat";

const Choice = () => {
  let dialogData = [
    {
      name: "Hermione Granger",
      stat: "writes...",
      time: "1 minute ago",
      text: "Hello how are you",
      msg: "2",
      id: "1",
    },
    {
      name: "Ron Weasley",
      stat: "last online 5 hours ago",
      time: "3 days ago",
      text: "Hello! I tweaked everything you asked. I am sending the finished file.",
      id: "2",
    },
  ];
  return (
    <section className={s.section__choice}>
      <div className={s.choice__content}>
        <div className={s.choice__header}>
          <div className={s["choice__wrapp-title"]}>
            <h1 className={s.choice__title}>Chats</h1>
            <p className={s.choice__subtitle}>Recent Chats</p>
          </div>
          <button className={s.btn}>
            <i className="icons icon-plus"></i>Create new Chat
          </button>
        </div>

        <div className={s.choice__search}>
          <i className="icons icon-search"></i>
          <input className={s["choice__input-search"]} type="search" />
          <button className={s["choice__btn-search"]}>Search</button>
        </div>
        <div className={s["choice__chat-wrapper"]}>
          <ChoiceChat {...dialogData[0]} />
          <ChoiceChat {...dialogData[1]} />
          <div className={s["choice__chat-active"]}>
            <div className={s["choice-chat__head"]}>
              <div className={s["choice-chat__avatar"]}>
                <picture>
                  <source srcset="img/ronwezlle.webp" type="image/webp" />
                  <img className={s["choice-chat__avatar-img"]} src="img/ronwezlle.jpg" alt="Ron" />
                </picture>
              </div>

              <div className={s["choice-chat__title-wrapp"]}>
                <div className={s["choice-chat__title"]}>
                  <h4 className={s["choice-chat__name"]}>Ron Weasley</h4>
                  <span className={s["choice-chat__stat"]}>last online 5 hours ago</span>
                </div>
                <span className={s["choice-chat__time"]}>3 days ago</span>
              </div>
            </div>
            <div className={s["choice-chat__content"]}>
              <span className={s["choice-chat__content-text"]}>Hello! I tweaked everything you asked. I am sending the finished file.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choice;
