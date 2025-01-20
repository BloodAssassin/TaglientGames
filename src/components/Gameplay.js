import React from "react";
import "../css/gameplay.css";
import logo from "../images/Logo/TaglientGamesLogo.png";

export default function Gameplay() {
  return (
    <div>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source
            src={require("../videos/RiverSpirit Entrance.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="index-content">
        <img src={logo} alt="Taglient Games Logo" />
        <p>
          We are a game development studio that puts{" "}
          <b className="highlight">ART</b> first!
        </p>
        <a href="#games">
          <button className="index-button games-button">Games</button>
        </a>
        <a href="#about">
          <button className="index-button people-button">People</button>
        </a>
      </div>
    </div>
  );
}
