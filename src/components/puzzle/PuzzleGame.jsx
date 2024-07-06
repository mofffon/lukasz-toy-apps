import { useState } from "react";
import config from "./config.json";

import PuzzleBoard from "./PuzzleBoard";
import PuzzleMenu from "./PuzzleMenu";
import "./css/puzzle.css";

const PuzzleGame = () => {
  let [currentPicture, setCurrentPicture] = useState(config.pictures[0]);
  let [gameState, setGameState] = useState(config.gameStates[0]);
  let [picturePiecesNumbers, setPicturePiecesNumbers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);

  let [blankPieceCoors, setBlankPieceCoors] = useState({ xCoor: 3, yCoor: 3 });

  const startResetGame = () => {
    if (gameState === config.gameStates[0]) {
      setGameState(config.gameStates[1]);
      scramblePicture();
    } else {
      setGameState(config.gameStates[0]);
      picturePiecesNumbers.sort((a, b) => a - b);
      setPicturePiecesNumbers([...picturePiecesNumbers]);
    }
  };

  const scramblePicture = () => {
    for (let i = 0; i < picturePiecesNumbers.length; i++) {
      const index = Math.floor(
        Math.random() * config.boardSize * config.boardSize
      );
      swapArrItems(picturePiecesNumbers, i, index);
    }

    picturePiecesNumbers.filter((num, i) => {
      if (num === config.boardSize * config.boardSize) {
        const xCoor = Math.floor(i / config.boardSize);
        const yCoor = Math.floor(i % config.boardSize);
        setBlankPieceCoors({ xCoor, yCoor });
      }
    });

    setPicturePiecesNumbers([...picturePiecesNumbers]);
  };

  const swapArrItems = (arr, index1, index2) => {
    const temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
  };

  const squareClick = (e) => {
    console.log(e.target);
    const targetPieceCoors = {
      xCoor: parseInt(e.target.dataset.rowindex),
      yCoor: parseInt(e.target.dataset.columnindex),
    };
    console.log(targetPieceCoors);
    console.log(blankPieceCoors);

    if (isSwitchPossible(targetPieceCoors, blankPieceCoors)) {
      switchPieces(targetPieceCoors, blankPieceCoors);
    }
  };

  const switchPieces = (elem1, elem2) => {
    swapArrItems(
      picturePiecesNumbers,
      elem1.xCoor * config.boardSize + elem1.yCoor,
      elem2.xCoor * config.boardSize + elem2.yCoor
    );

    picturePiecesNumbers.forEach((num, i) => {
      if (num === config.boardSize * config.boardSize) {
        const xCoor = Math.floor(i / config.boardSize);
        const yCoor = Math.floor(i % config.boardSize);
        setBlankPieceCoors({ xCoor, yCoor });
      }
    });

    if (isEndGame()) {
      alert("You have won the game !!");
      startResetGame();
    }
  };

  const isEndGame = () => {
    for (let i = 0; i < config.boardSize * config.boardSize; i++) {
      if (picturePiecesNumbers[i] !== i + 1) {
        return false;
      }
    }

    return true;
  };

  const isSwitchPossible = (elem1, elem2) => {
    if (elem1.yCoor === 0 && elem2.yCoor === config.boardSize - 1) {
      return false;
    }

    if (elem1.xCoor === 0 && elem2.xCoor === config.boardSize - 1) {
      return false;
    }

    if (elem1.xCoor === elem2.xCoor && elem1.yCoor === elem2.yCoor)
      return false;

    return elem1.xCoor === elem2.xCoor || elem1.yCoor === elem2.yCoor;
  };

  const nextPicture = () => {
    const currIndex = config.pictures.indexOf(currentPicture);

    if (currIndex === config.pictures.length - 1) {
      setCurrentPicture(config.pictures[0]);
    } else {
      setCurrentPicture(config.pictures[currIndex + 1]);
    }
  };

  const previousPicture = () => {
    const currIndex = config.pictures.indexOf(currentPicture);

    if (currIndex === 0) {
      setCurrentPicture(config.pictures[config.pictures.length - 1]);
    } else {
      setCurrentPicture(config.pictures[currIndex - 1]);
    }
  };

  return (
    <div className="container">
      <PuzzleMenu
        startResetGame={startResetGame}
        currentPicture={currentPicture}
        nextPicture={nextPicture}
        previousPicture={previousPicture}
        gameState={gameState}
      />
      <PuzzleBoard
        gameState={gameState}
        currentPicture={currentPicture}
        picturePiecesNumbers={picturePiecesNumbers}
        squareClick={squareClick}
      />
    </div>
  );
};

export default PuzzleGame;
