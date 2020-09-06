import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "./Search";
function Home() {
  return (
    <div className="home">
      <div className="home__navbar">
        <div className="home__navbarleft">
          <Link to="/about">About</Link>
          <Link to="/stores">Stores</Link>
        </div>

        <div className="home__navbarright">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          className="homebody__logo"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google logo"
        />

        <div className="homebody__search">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
