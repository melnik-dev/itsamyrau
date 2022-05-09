import React from "react";
import s from "./Chats.module.css";

const MyMessage = (props) => {
  return (
    <div className={s["chat-content__messeg-me-wrapp"]}>
      <button className={s["chat-content__messeg-me-more"]}>
        <i className="icons icon-dout"></i>
      </button>
      <div className={s["chat-content__messeg-me"]}>
        <span className={s["chat-content__messeg-me-text"]}>{props.message}</span>
        <span className={s["chat-content__messeg-me-time"]}>{props.writetime}</span>
      </div>

      <div className={s["chat-content__messeg-me-check"]}>
        <img className="icon-check" src="img/icons/icons.svg#check" alt="check" width="12" height="12" />
      </div>
    </div>
  );
};
const UserMessage = (props) => {
  return (
    <div className={`${s["chat-content__messeg-me-wrapp"]} ${s["messeg-user-wrapp"]}`}>
      <button className={s["chat-content__messeg-me-more"]}>
        <i className="icons icon-dout"></i>
      </button>
      <div className={s["chat-content__messeg-me"]}>
        <span className={s["chat-content__messeg-me-text"]}>{props.message}</span>
        <span className={s["chat-content__messeg-me-time"]}>{props.writetime}</span>
      </div>

      <div className={s["chat-content__messeg-me-check"]}>
        <img className="icon-check" src="img/icons/icons.svg#check" alt="check" width="12" height="12" />
      </div>
    </div>
  );
};
const Chats = () => {
  let myMessageData = [
    {
      id: "1",
      message: "Hello! I tweaked everything you asked. I am sending the finished file.",
      writetime: "3 days ago",
    },
    {
      id: "2",
      message: "Hey! Okay, send out.",
      writetime: "4 days ago",
    },
  ];
  let userMessageData = [
    {
      id: "1",
      message: "Can I send you files?",
      writetime: "4 days ago",
    },
    {
      id: "2",
      message: "Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.",
      writetime: "",
    },
  ];
  return (
    <section className={s.section__chat}>
      <div className={s.chat__wrapper}>
        <div className={s.chat__header}>
          <div className={s.chat__avatar}>
            <div className={s["chat__avatar-img-wrap"]}>
              <picture>
                <source srcSet="img/ronwezlle.webp" type="image/webp" />
                <img className={s["chat__avatar-img"]} src="img/ronwezlle.jpg" alt="ron" />
              </picture>
            </div>
            <div className={s["chat__avatar-title"]}>
              <span className={s["chat__avatar-name"]}>Ron Weasley</span>
              <span className={s["chat__avatar-stat"]}>last online 5 hours ago</span>
            </div>
          </div>

          <div className={s["chat-header__btn-wrapper"]}>
            <button className={s["chat-header__btn"]}>
              <i className="icons icon-search"></i>
            </button>
            <button className={s["chat-header__btn"]}>
              <i className="icons icon-dout"></i>
            </button>
          </div>
        </div>
        <div className={s.chat__content}>
          <MyMessage message={myMessageData[0].message} writetime={myMessageData[0].writetime} id={myMessageData[0].id} />
          <UserMessage message={userMessageData[0].message} writetime={userMessageData[0].writetime} id={userMessageData[0].id} />
          <UserMessage message={userMessageData[1].message} writetime={userMessageData[1].writetime} id={userMessageData[1].id} />
          <MyMessage message={myMessageData[1].message} writetime={myMessageData[1].writetime} id={myMessageData[1].id} />
        </div>
        <div className={s["chat__send-wrap"]}>
          <div className={s["chat-send"]}>
            <button className={s["chat-send__btn"]}>
              <i className="icons icon-plus"></i>
            </button>
            <div className={s["chat-send__messege-wrapper"]}>
              <input className={s["chat-send__messege"]} placeholder="Type a message here" name="send__messege" value="" />
              <button className={s["chat-send__btn-smile"]}>
                <i className="icons icon-smile"></i>
              </button>
            </div>
            <button className={`${s["chat-send__btn"]} ${s["chat-send__btn-send"]}`}>
              <i className="icons icon-send"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chats;
