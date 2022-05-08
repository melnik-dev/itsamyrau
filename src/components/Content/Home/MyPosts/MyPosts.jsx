import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <h1 className={s.title}>My Posts</h1>
      <Post message="Высоко, высоко в горах..." />
      <Post message="Первый пост" />
      <div className={s.input__wrapper}>
        <input className={s.input} type="text" placeholder="Add your post.." />
      </div>
    </div>
  );
};

export default MyPosts;
