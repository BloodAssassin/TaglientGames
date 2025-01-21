import React from "react";
import "../css/games.css";
import svarog from "../images/Svarog/Svarog-cover.jpg";
import paperSharp from "../images/PaperSharp/PaperSharp-Cover.jpg";

export default function Content() {
  return (
    <div id="games" className="games">
      <div className="content">
        <h1>Our Games</h1>
      </div>
      <a href="https://bloodassassin89.itch.io/svarog" target="_blank">
        <div id="svarog-container" className="game-container">
          <img className="game-image" alt="svarog-image" src={svarog} />
          <div className="game-info">
            <h2 className="game-title">SVAROG</h2>
            <p className="game-desc">
              Imagine a world where the whispers of{" "}
              <b className="highlight">slavic gods</b> echo through forgotten
              forests, where eerie creatures from old folktales lurk in the
              shadows, and where every step you take is a journey deeper into
              the heart of a forgotten <b className="highlight">mythology</b>.
              In <b className="highlight">SVAROG</b>, you'll be thrust into this
              hauntingly beautiful world, where danger and discovery await at
              every turn.
            </p>
          </div>
        </div>
      </a>
      <a href="https://bloodassassin89.itch.io/paper-sharp" target="_blank">
        <div id="papersharp-container" className="game-container">
          <img
            className="game-image"
            alt="paper-sharp-image"
            src={paperSharp}
          />
          <div className="game-info">
            <h2 className="game-title">Paper Sharp</h2>
            <p className="game-desc">
              A mathematical-historical educational video game set in the{" "}
              <b className="highlight">17th century Italy</b>. The game is based
              on the real historical figure{" "}
              <b className="highlight">Antonio Maria del Fiore</b>, a student of
              <b className="highlight"> Scipione del Ferro</b>, who invented the
              first cubic equation.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
