import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdAddBox } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../client";
import { searchPrompts } from "../utils";

const Search = ({ Prompts, setPrompts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const searchPrompt = (e) => {
    async function fetPrompts() {
      await client
        .fetch(searchPrompts(e.target.value))
        .then((data) => setPrompts(data))
        .catch((e) => console.log(e));
    }
    fetPrompts();
  };

  return (
    <div className="flex w-full mt-5">
      <div className="flex gap-3 justify-start items-center w-full px-2">
        <IoIosSearch />
        <input
          placeholder="Search"
          className="border-2 border-gray-300 rounded-md p-1 w-full "
          onChange={(e) => searchPrompt(e)}
        />
      </div>
      <div className="flex items-center">
        <Link to="create-prompt">
          <MdAddBox fontSize={45} />
        </Link>
      </div>
    </div>
  );
};

export default Search;
