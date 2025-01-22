import React from "react";
import "../css/navigation.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Taglient Games</div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
