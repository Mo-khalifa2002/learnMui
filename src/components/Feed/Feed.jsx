import React from "react";
import "./FeedCss.css";
import MainSearch from "./MainSearch";
import Post from "./Post";
import { posts } from "../DummyData";
import { users } from "../DummyData";

const Feed = () => {
  return (
    <div>
      <MainSearch />
      {/* mapping from the posts */}
      {posts.map((po) => (
        <Post key={po.id} posts={po} />
      ))}
      {/* {users.map((u) => (
        <Post key={u.id} use={u} />
      ))} */}
      
    </div>
  );
};

export default Feed;
