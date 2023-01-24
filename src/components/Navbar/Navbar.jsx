import React from "react";
import Logo from "../../assets/logo.svg";
import YoutubeIcon from "../../assets/youtube-icon.svg";

const Navbar = () => {
  return (
    <div className="nav-bar-container">
      <div className="loader nav-bar-loader"></div>
      <nav className="nav-bar">
        <img className="logo" src={Logo} alt="logo" />
        <img className="youtube-icon" src={YoutubeIcon} alt="logo" />
        <div className="search">
          <div className="search-bar">
            <input className="search-field" type="text" />
            <div className="cancel-icon">
              <i className="fa fa-xmark"></i>
            </div>
          </div>
          <button type="submit">
            <i className="fa fa-search fa-lg"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
