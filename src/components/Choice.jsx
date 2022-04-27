import React from "react";
import "./Choice.css";

const Choice = () => {
  return (
    <section classNameName="section__choice">
      <div className="choice__content">
        <div className="choice__header">
          <div className="choice__wrapp-title">
            <h1 className="choice__title">Chats</h1>
            <p className="choice__subtitle">Recent Chats</p>
          </div>
          <button className="choice__btn btn">
            <i className="icons icon-plus"></i>Create new Chat
          </button>
        </div>

        <div className="choice__search">
          <i className="icons icon-search"></i>
          <input className="choice__input-search" type="search" />
          <button className="choice__btn-search">Search</button>
        </div>
        <div className="choice__chat-wrapper">
          <div className="choice__chat">
            <div className="choice-chat__head">
              <div className="choice-chat__avatar">
                <picture>
                  <source srcset="img/hermione.webp" type="image/webp" />
                  <img src="img/hermione.jpg" alt="hermione" className="choice-chat__avatar-img" />
                </picture>
              </div>

              <div className="choice-chat__title-wrapp">
                <div className="choice-chat__title">
                  <h4 className="choice-chat__name">Hermione Granger</h4>
                  <span className="choice-chat__stat">writes...</span>
                </div>
                <span className="choice-chat__time">1 minute ago</span>
              </div>
            </div>
            <div className="choice-chat__content">
              <span className="choice-chat__content-text">Hello how are you</span>
              <span className="choice-chat__content-msg">2</span>
            </div>
          </div>

          <div className="choice__chat choice__chat-active">
            <div className="choice-chat__head">
              <div className="choice-chat__avatar">
                <picture>
                  <source srcset="img/ronwezlle.webp" type="image/webp" />
                  <img src="img/ronwezlle.jpg" alt="Ron" className="choice-chat__avatar-img" />
                </picture>
              </div>

              <div className="choice-chat__title-wrapp">
                <div className="choice-chat__title">
                  <h4 className="choice-chat__name">Ron Weasley</h4>
                  <span className="choice-chat__stat">last online 5 hours ago</span>
                </div>
                <span className="choice-chat__time">3 days ago</span>
              </div>
            </div>
            <div className="choice-chat__content">
              <span className="choice-chat__content-text">Hello! I tweaked everything you asked. I am sending the finished file.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choice;
