import React, { useEffect } from "react";
import "../css/navigation.css";
import logo from "../images/Logo/TaglientGamesLogo_White.png";

export default function Navigation() {
  useEffect(() => {
    const navbar = document.querySelector(".navigation");

    // Hide the navigation bar when not on top of the page
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

  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    if (targetId === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navigation">
      <a href="#" onClick={handleLinkClick}>
        <img src={logo} alt="Taglient Games Logo" className="logo" />
      </a>
      <ul>
        <li>
          <a href="#" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#games" onClick={handleLinkClick}>
            Games
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
