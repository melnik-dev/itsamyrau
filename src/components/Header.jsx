import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header classNameName="section__header">
      <div classNameName="header__avatar avatar">
        <picture>
          <source srcset="img/garri_potter.webp" type="image/webp" />
          <img classNameName="avatar__img" src="img/garri_potter.jpg" alt="garri potter" />
        </picture>
        <span classNameName="avatar__name">Garri Potter</span>
      </div>

      <nav classNameName="header__menu menu__body">
        <ul classNameName="menu__list">
          <li classNameName="menu__item menu__item--active">
            <a classNameName="menu__link" href="/">
              <i classNameName="icons icon-houm"></i> Home
            </a>
          </li>
          <li classNameName="menu__item">
            <a classNameName="menu__link" href="/">
              <i classNameName="icons icon-chats"></i>Chat
            </a>
          </li>
          <li classNameName="menu__item">
            <a classNameName="menu__link" href="/">
              <i classNameName="icons icon-chanels"></i>Channels
            </a>
          </li>
          <li classNameName="menu__item">
            <a classNameName="menu__link" href="/">
              <i classNameName="icons icon-contacts"></i>Contact
            </a>
          </li>
          <li classNameName="menu__item">
            <a classNameName="menu__link" href="/">
              <i classNameName="icons icon-setting"></i>Settings
            </a>
          </li>

          <li classNameName="menu__item">
            <a classNameName="menu__link" href="/">
              <i classNameName="icons icon-logout"></i>Log out
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
