import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {

  return (
    <header>
      <div className="container">
        <div>
          <FontAwesomeIcon icon={faVideoSlash} />Gold
        </div>
        <div />
        <div>
          <div className="my-2 me-auto my-lg-0">
            <a className="nav-link" to="/">Home</a>
            <a className="nav-link" to="/watchList">Watch List</a>
          </div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </header>
  )
}

export default Header