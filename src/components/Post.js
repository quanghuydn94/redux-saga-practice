import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../redux/actions";

export const Post = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleGetPosts = () => {
    dispatch(getPosts());
  };
  const handleAddPost = () => {
    dispatch(addPost({ title, description }));
  };
  return (
    <div>
      <button onClick={handleGetPosts}>Get post</button>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
      />
      <button onClick={handleAddPost}> Add item</button>
    </div>
  );
};
