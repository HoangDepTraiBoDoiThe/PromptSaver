import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Body } from "../components";
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
        <Route path="/" element={<Body user={user && user} />} />
      </Routes>
    </div>
  );
};

export default Home;
