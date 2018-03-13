import React, { Component } from "react";
import "./styles/Board.css";

import Game from './Game';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <Game/>
      </div>
    );
  }
}

export default Board;
