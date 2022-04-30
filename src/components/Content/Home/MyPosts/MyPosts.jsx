import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <h2>Мои посты</h2>
      <Post message="Высоко, высоко в горах..." />
      <Post message="Первый пост" />
    </div>
  );
};

export default MyPosts;
