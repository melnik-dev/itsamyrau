import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.section__header}>
      <div className={`${s.header__avatar} ${s.avatar}`}>
        <picture>
          <source srcSet="img/garri_potter.webp" type="image/webp" />
          <img className={s.avatar__img} src="img/garri_potter.jpg" alt="garri potter" />
        </picture>
        <span className={s.avatar__name}>Garri Potter</span>
      </div>

      <nav className={`${s.header__menu} ${s.menu__body}`}>
        <ul className={s.menu__list}>
          <li className={s.menu__item}>
            <NavLink className={({ isActive }) => (isActive ? s.active__link : undefined) + " " + s.menu__link} to="/">
              <i className="icons icon-houm"></i>Home
            </NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink className={({ isActive }) => (isActive ? s.active__link : undefined) + " " + s.menu__link} to="/chat">
              <i className="icons icon-chats"></i>Chat
            </NavLink>
          </li>
          <li className={s.menu__item}>
            <a className={s.menu__link} href="/">
              <i className="icons icon-chanels"></i>Channels
            </a>
          </li>
          <li className={s.menu__item}>
            <a className={s.menu__link} href="/">
              <i className="icons icon-contacts"></i>Contact
            </a>
          </li>
          <li className={s.menu__item}>
            <a className={s.menu__link} href="/">
              <i className="icons icon-setting"></i>Settings
            </a>
          </li>

          <li className={s.menu__item}>
            <a className={s.menu__link} href="/">
              <i className="icons icon-logout"></i>Log out
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
