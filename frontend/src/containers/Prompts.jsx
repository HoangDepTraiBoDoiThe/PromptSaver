import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Prompt, Search } from "../components";
import { client } from "../client";
import { getPrompts } from "../utils";

const Prompts = ({ user }) => {
  const [Prompts, setPrompts] = useState([]);
  const [savePrompt, setSavePrompt] = useState("");

  useEffect(() => {
    async function fetchPrompts() {
      await client
        .fetch(getPrompts())
        .then((data) => setPrompts(data))
        .catch((e) => console.log(e));
    }
    fetchPrompts();
  }, [useLocation()]);

  return (
    <div>
      <Search Prompts={Prompts} setPrompts={setPrompts} />
      <div className="w-full gap-2 flex flex-wrap p-5">
        {Prompts?.map((prompt, i) => (
          <Prompt
            key={i}
            user={user && user}
            prompt={prompt}
            savePrompt={savePrompt}
            setSavePrompt={setSavePrompt}
          />
        ))}
      </div>
    </div>
  );
};

export default Prompts;
