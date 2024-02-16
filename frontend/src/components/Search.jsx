import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdAddBox } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const createPrompt = () => {};
  const navigate = useNavigate();

  return (
    <div className="flex w-full mt-5">
      <div className="flex gap-3 justify-start items-center w-full px-2">
        <IoIosSearch />
        <input
          placeholder="Search"
          className="border-2 border-gray-300 rounded-md p-1 w-full "
          type=""
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
