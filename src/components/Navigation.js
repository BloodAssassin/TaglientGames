import React, { useEffect } from "react";
import "../css/navigation.css";
import logo from "../images/Logo/TaglientGamesLogo_White.png";

export default function Navigation() {
  useEffect(() => {
    const navbar = document.querySelector(".navigation");

    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop < 50) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-100px";
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className="navigation">
      <a href="#">
        <img src={logo} alt="Taglient Games Logo" className="logo" />
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#games">Games</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
