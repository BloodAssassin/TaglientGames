import React from "react";
import "../css/games.css";
import svarog from "../images/Hades2.webp";
import paperSharp from "../images/Hades2.webp";

export default function Content() {
  return (
    <div id="games" className="games">
      <div className="content">
        <h1>Our Games</h1>
      </div>
      <div className="game-container">
        <img className="game-image" alt="svarog-image" src={svarog} />
        <div className="game-info">
          <h2 className="game-title">Svarog</h2>
          <p className="game-desc">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis proin
            per potenti at class tellus laoreet. Mus enim leo primis elit hac.
            Class litora mauris class; est primis arcu. Risus augue montes lacus
            nullam odio dui placerat. Conubia
          </p>
        </div>
      </div>
      <div className="game-container">
        <img className="game-image" alt="paper-sharp-image" src={paperSharp} />
        <div className="game-info">
          <h2 className="game-title">Paper Sharp</h2>
          <p className="game-desc">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis proin
            per potenti at class tellus laoreet. Mus enim leo primis elit hac.
            Class litora mauris class; est primis arcu. Risus augue montes lacus
            nullam odio dui placerat. Conubia
          </p>
        </div>
      </div>
    </div>
  );
}
