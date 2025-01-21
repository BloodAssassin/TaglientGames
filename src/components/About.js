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
        <h1>Founders</h1>
        <p>
          We established <b className="highlight_blue">Taglient</b>{" "}
          <b className="highlight">Games</b> in pursuit of our dream to create
          amazing indie games that people will enjoy.
        </p>
        <div className="team">
          <a
            href="https://www.linkedin.com/in/milos-ristic-a61132242/"
            target="_blank"
          >
            <div id="milos" className="team-member">
              <div className="gradient-overlay"></div>
              <img src={milos_ristic} />
              <div className="team-info">
                <h1>Milos Ristic</h1>
                <p>Programmer | Lead Artist</p>
                <p className="additional-text">
                  Milos is the creative force behind our art and design.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/luka-pavi%C4%87evi%C4%87-2bb44b310/"
            target="_blank"
          >
            <div id="luka" className="team-member">
              <div className="gradient-overlay"></div>
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
          </a>
          <a
            href="https://www.linkedin.com/in/stefan-jov%C4%8Di%C4%87-287809313/"
            target="_blank"
          >
            <div id="stefan" className="team-member">
              <div className="gradient-overlay"></div>
              <img src={stefan_jovcic} />
              <div className="team-info">
                <h1>Stefan Jovcic</h1>
                <p>Community Manager</p>
                <p className="additional-text">
                  Stefan connects with our community and sometimes jumps in for
                  additional programming.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
