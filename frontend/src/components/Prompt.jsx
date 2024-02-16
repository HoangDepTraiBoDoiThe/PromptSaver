import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuCopyPlus, LuCopyCheck } from "react-icons/lu";

const Prompt = ({ user, prompt, savePrompt, setSavePrompt }) => {
  const navigate = useNavigate();

  const copyPrompt = () => {
    setSavePrompt(prompt?.prompt);
    navigator.clipboard.writeText(prompt?.prompt);
  };

  return (
    <div className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-full w-full h-fit hover:shadow-md">
      <div className="flex justify-between items-center min-w-[150px]">
        <Link
          to={`/user-profile/${prompt?.createBy?._id}`}
          className="gap-2 flex justify-start items-center cursor-pointer"
        >
          <img src={prompt?.createBy?.image} className="rounded-full w-10" />
          <p className="text-base">{user?.name}</p>
        </Link>
        <div className="cursor-pointer" onClick={copyPrompt}>
          {savePrompt === prompt?.prompt ? (
            <LuCopyCheck fontSize={30} />
          ) : (
            <LuCopyPlus fontSize={30} />
          )}
        </div>
      </div>
      <div className="my-4 font-satoshi text-sm text-gray-700">
        <p className="break-words">{prompt?.prompt}</p>
      </div>
    </div>
  );
};

export default Prompt;
