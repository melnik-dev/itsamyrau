import React from "react";
import "./Chats.css";

const Chats = () => {
  return (
    <section className="section__chat">
      <div className="chat__wrapper">
        <div className="chat__header">
          <div className="chat__avatar">
            <div className="chat__avatar-img-wrap">
              <picture>
                <source srcset="img/ronwezlle.webp" type="image/webp" />
                <img className="chat__avatar-img" src="img/ronwezlle.jpg" alt="ron" />
              </picture>
            </div>
            <div className="chat__avatar-title">
              <span className="chat__avatar-name">Ron Weasley</span>
              <span className="chat__avatar-stat">last online 5 hours ago</span>
            </div>
          </div>

          <div className="chat-header__btn-wrapper">
            <button className="chat-header__btn">
              <i className="icons icon-search"></i>
            </button>
            <button className="chat-header__btn">
              <i className="icons icon-dout"></i>
            </button>
          </div>
        </div>
        <div className="chat__content">
          <div className="chat-content__messeg-me-wrapp">
            <button className="chat-content__messeg-me-more">
              <i className="icons icon-dout"></i>
            </button>
            <div className="chat-content__messeg-me">
              <span className="chat-content__messeg-me-text">Hello! I tweaked everything you asked. I am sending the finished file.</span>
              <span className="chat-content__messeg-me-time">3 days ago</span>
            </div>

            <div className="chat-content__messeg-me-check">
              <img className="icon-check" src="img/icons/icons.svg#check" alt="check" width="12" height="12" />
            </div>
          </div>

          <div className="chat-content__messeg-me-wrapp messeg-user-wrapp">
            <button className="chat-content__messeg-me-more">
              <i className="icons icon-dout"></i>
            </button>
            <div className="chat-content__messeg-me">
              <span className="chat-content__messeg-me-text">Can I send you files?</span>
              <span className="chat-content__messeg-me-time">4 days ago</span>
            </div>

            <div className="chat-content__messeg-me-check">
              <img className="icon-check" src="img/icons/icons.svg#check" alt="check" width="12" height="12" />
            </div>
          </div>

          <div className="chat-content__messeg-me-wrapp messeg-user-wrapp">
            <button className="chat-content__messeg-me-more">
              <i className="icons icon-dout"></i>
            </button>
            <div className="chat-content__messeg-me">
              <span className="chat-content__messeg-me-text">Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application. </span>
              <span className="chat-content__messeg-me-time"></span>
            </div>

            <div className="chat-content__messeg-me-check">
              <img className="icon-check" src="img/icons/icons.svg#check" alt="check" width="12" height="12" />
            </div>
          </div>

          <div className="chat-content__messeg-me-wrapp">
            <button className="chat-content__messeg-me-more">
              <i className="icons icon-dout"></i>
            </button>
            <div className="chat-content__messeg-me">
              <span className="chat-content__messeg-me-text">Hey! Okay, send out.</span>
              <span className="chat-content__messeg-me-time">4 days ago</span>
            </div>

            <div className="chat-content__messeg-me-check">
              <img className="icon-check" src="img/icons/icons.svg#check" alt="check" width="12" height="12" />
            </div>
          </div>
        </div>
        <div className="chat__send-wrap">
          <div className="chat-send">
            <button className="chat-send__btn chat-send__btn-add">
              <i className="icons icon-plus"></i>
            </button>
            <div className="chat-send__messege-wrapper">
              <input className="chat-send__messege" placeholder="Type a message here" name="send__messege" value="" />
              <button className="chat-send__btn-smile">
                <i className="icons icon-smile"></i>
              </button>
            </div>
            <button className="chat-send__btn chat-send__btn-send">
              <i className="icons icon-send"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chats;
