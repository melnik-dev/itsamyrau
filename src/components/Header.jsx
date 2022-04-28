import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="section__header">
      <div className="header__avatar avatar">
        <picture>
          <source srcset="img/garri_potter.webp" type="image/webp" />
          <img className="avatar__img" src="img/garri_potter.jpg" alt="garri potter" />
        </picture>
        <span className="avatar__name">Garri Potter</span>
      </div>

      <nav className="header__menu menu__body">
        <ul className="menu__list">
          <li className="menu__item menu__item--active">
            <a className="menu__link" href="/">
              <i className="icons icon-houm"></i> Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/">
              <i className="icons icon-chats"></i>Chat
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/">
              <i className="icons icon-chanels"></i>Channels
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/">
              <i className="icons icon-contacts"></i>Contact
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/">
              <i className="icons icon-setting"></i>Settings
            </a>
          </li>

          <li className="menu__item">
            <a className="menu__link" href="/">
              <i className="icons icon-logout"></i>Log out
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
