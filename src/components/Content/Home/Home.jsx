import React from "react";
import s from "./Home.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Home = () => {
  return (
    <div className={s.content}>
      <div className={s.profile}>
        <div className={s.avatar}>
          <picture>
            <source srcSet="img/garri_potter.webp" type="image/webp" />
            <img className={s.avatar__img} src="img/garri_potter.jpg" alt="garri potter" />
          </picture>
          <span className={s.avatar__name}>Garri Potter</span>
        </div>
        <div className={s.prof__info}>Возраст: 31 Дата рождеение: 06.12.1990 Город: Краснодар</div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Home;
