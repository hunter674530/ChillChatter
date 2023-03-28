import React from "react";
import Chats from "./Chats";
import Notes from "./Notes";

const Home = ({ user }) => {
  return (
    <div>
      <Chats user={user} />
      <Notes user={user} />
    </div>
  );
};

export default Home;
