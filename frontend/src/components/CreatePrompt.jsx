import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../client";
import { v4 } from "uuid";

const CreatePrompt = ({ user }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [incorect, setIncorect] = useState(false);

  const createNewPrompt = () => {
    if (
      title.replace(" ", "").length === 0 ||
      prompt.replace(" ", "").length === 0
    ) {
      setIncorect(true);
      setTimeout(() => {
        setIncorect(false);
      }, 3000);
    } else {
      const doc = {
        _type: "prompt",
        title,
        prompt,
        createBy: {
          _type: "createBy",
          _ref: user._id,
        },
      };
      async function addPrompt() {
        await client
          .create(doc)
          .then(navigate("/"))
          .catch((e) => console.log(e));
      }
      addPrompt();
    }
  };

  if (!user) navigate("login");

  return (
    <div className="p-5">
      {setIncorect && (
        <>
          <p>Incorect</p>
        </>
      )}
      <div className="flex flex-col ">
        <h2 className="font-semibold ">Title</h2>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add title here"
        ></input>
      </div>
      <div className="flex flex-col ">
        <h2 className="font-semibold ">Prompt</h2>
        <input
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Add prompt here"
        ></input>
      </div>
      <button
        className="bg-red-500 p-5 mt-5 rounded-md"
        onClick={createNewPrompt}
      >
        <p className="text-white text-base font-semibold">Create New Prompt</p>
      </button>
    </div>
  );
};

export default CreatePrompt;
