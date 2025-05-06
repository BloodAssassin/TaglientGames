import React, { useEffect, useState } from "react";
import "../css/gameplay.css";
import logo from "../images/Logo/TaglientGamesLogo.png";

export default function Gameplay() {
  const [scrollY, setScrollY] = useState(0);

  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    setScrollY(window.scrollY); // Track the vertical scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  // Apply the parallax effect using the scroll position
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
    transition: "transform 0.01s ease-out",
  };

  return (
    <div>
      <div className="video-container" style={parallaxStyle}>
        <video autoPlay loop muted playsInline className="background-video">
          <source
            src={require("../videos/RiverSpirit Entrance.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="index-content">
        <img src={logo} alt="Taglient_Games_Logo" />
        <p className="index-text">
          We are a game development studio that puts{" "}
          <b className="highlight">ART</b> first!
        </p>
        <div className="buttons">
          <a href="#games" onClick={handleLinkClick}>
            <button className="index-button games-button">Games</button>
          </a>
          <a href="#about" onClick={handleLinkClick}>
            <button className="index-button people-button">People</button>
          </a>
        </div>
      </div>
    </div>
  );
}
