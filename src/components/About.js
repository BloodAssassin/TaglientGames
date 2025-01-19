import React from "react";
import "../css/content.css";
import "../css/about.css";
import milos_ristic from "../images/Team/Milos_Ristic.jpg";
import luka_pavicevic from "../images/Team/Luka_Pavicevic.jpg";
import stefan_jovcic from "../images/Team/Stefan_Jovcic.jpg";

export default function Footer() {
  return (
    <div id="about" className="about content">
      <div className="us">
        <h1>About Us</h1>
        <p>
          We are a passionate team that loves playing and making video games!
        </p>
      </div>
      <br />
      <div className="founders">
        <h2>Founders</h2>
        <p>
          We established <b className="highlight_blue">Taglient</b>{" "}
          <b className="highlight">Games</b> in pursuit of our dream to create
          amazing indie games that people will enjoy.
        </p>
        <div className="team">
          <div className="team-member">
            <img src={milos_ristic} />
            <div className="team-info">
              <h1>Milos Ristic</h1>
              <p>Programmer | Lead Artist | Lead Designer</p>
              <p className="additional-text">
                Milos is the creative force behind our art and design.
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src={luka_pavicevic} />
            <div className="team-info">
              <h1>Luka Pavicevic</h1>
              <p>Lead Programmer | Concept Artist</p>
              <p className="additional-text">
                Luka ensures our code is clean and efficient. He is also a
                talented concept artist.
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src={stefan_jovcic} />
            <div className="team-info">
              <h1>Stefan Jovcic</h1>
              <p>Community Manager | PR and Marketing</p>
              <p className="additional-text">
                Stefan connects us with our community and manages our PR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
