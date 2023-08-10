import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="container px-4 mx-auto">
      <div className="flex items-center py-4 space-x-5">
        <div className="flex items-center space-x-1 text-secondary">
          <FontAwesomeIcon icon={faVideoSlash} />
          <p className="text-xl">Gold</p>
        </div>
        <div />
        <div className="flex justify-between w-full">
          <div className="my-2 space-x-5">
            <Link to="/">Home</Link>
            <Link to="/watchList">Watch List</Link>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-1 font-bold rounded-md border-[1px] border-secondary text-secondary hover:bg-secondary hover:text-bgColor">Login</button>
            <button className="px-3 py-1 font-bold rounded-md border-[1px] border-secondary text-secondary hover:bg-secondary hover:text-bgColor">Register</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header