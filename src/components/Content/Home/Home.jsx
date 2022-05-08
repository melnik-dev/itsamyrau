import React from "react";
import s from "./Home.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Home = () => {
  return (
    <div className={`${s.overflow} container`}>
      <div className={s.fon}>
        <picture>
          <source srcSet="img/hg.webp" type="image/webp" />
          <img className={s.fon__img} src="img/hg.jpg" alt="Hogwarts" />
        </picture>
      </div>
      <div className={s.profile}>
        <div className={s.avatar}>
          <picture>
            <source srcSet="img/garri_potter.webp" type="image/webp" />
            <img className={s.avatar__img} src="img/garri_potter.jpg" alt="garri potter" />
          </picture>
        </div>
        <div className={s.prof__info}>
          <h3 className={s.prof__name}>Garri Potter</h3>
          <div>
            <p>The first wizard who managed to resist the death curse "Avada Kedavra".</p>
            <p>Heroically fought Lord Voldemort and his followers the Death Eaters.</p>
            <p>The only one who managed to defeat the Dark Lord. Winner of a special Hogwarts award "For services to the school."</p>
          </div>
          <p>Age: 31</p>
          <p>City: United Kingdom</p>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Home;
