import { useState, useEffect } from "react";

import config from "./config.json";
import PuzzleSquare from "./PuzzleSquare";

const PuzzleBoard = ({
  currentPicture,
  squareClick,
  picturePiecesNumbers,
  gameState,
}) => {
  console.log(config.picturePath + currentPicture + "/");

  const buildSquares = () => {
    let counter = 1;
    const arr = [];

    for (let i = 0; i < config.boardSize; i++) {
      for (let j = 0; j < config.boardSize; j++) {
        arr.push(
          <PuzzleSquare
            key={i * config.boardSize + j}
            rowIndex={i}
            columnIndex={j}
            pictureName={currentPicture}
            gameState={gameState}
            number={picturePiecesNumbers[i * config.boardSize + j]}
            squareClick={squareClick}
          />
        );
      }
    }

    return arr;
  };

  return (
    <>
      <div className="puzzleBoard">{buildSquares()}</div>
    </>
  );
};

export default PuzzleBoard;
