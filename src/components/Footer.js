import React from "react";
import "../css/footer.css";
import logo from "../images/Logo/TaglientGamesLogo_White.png";

export default function Footer() {
  return (
    <nav className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#games">Games</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <br />
        <br /> <img src={logo} />
        <br />
        <p>www.taglientgames.com</p>
        <p>
          This website is managed by a team of individuals and is not affiliated
          with a registered company.
        </p>
      </div>
      <div className="company">
        Location: Serbia <br />
        <br />
        Taglient Games © 2025
      </div>
    </nav>
  );
}
