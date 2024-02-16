import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CreatePrompt, NavBar, Prompts, UserProfile } from "../components";
import { client } from "../client";
import { getUser } from "../utils";

const Home = () => {
  const localUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      await client
        .fetch(getUser(localUser.sub))
        .then((data) => setUser(data[0]))
        .catch((e) => console.log(e));
    }
    fetchUser();
  }, []);

  return (
    <div>
      <NavBar user={user && user} />
      <Routes>
        <Route path="/*" element={<Prompts user={user && user} />} />
        <Route
          path="/user-profile/:userId"
          element={<UserProfile user={user && user} />}
        />
        <Route
          path="/create-prompt"
          element={<CreatePrompt user={user && user} />}
        />
      </Routes>
    </div>
  );
};

export default Home;
