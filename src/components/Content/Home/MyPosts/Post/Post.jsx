import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img className={s.avatar__img} src="img/garri_potter.jpg" alt="garri potter" />
      <p className={s.text}>{props.message}</p>
    </div>
  );
};

export default Post;
