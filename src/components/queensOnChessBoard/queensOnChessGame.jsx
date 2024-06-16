import { useState } from "react";
import config from "./config.json";
import "./css/queensOnChessBoard.css";
import Board from "./queensOnChessBoard";
import Menu from "./queensOnChessMenu";

function QueensOnChessBoard() {
  let [gameState, setGameState] = useState(config.gameStates[0]);
  let [showColors, setShowColors] = useState(false);
  let [queenCount, setQueenCount] = useState(0);

  const buildDefaultFields = () => {
    const defFields = [];

    for (let rowIndex of config.rowIndexes) {
      for (let columnIndex of config.columnIndexes) {
        defFields.push({
          rowIndex,
          columnIndex,
          className: config.fieldStates[0],
        });
      }
    }

    return defFields;
  };

  const [fields, setFields] = useState(buildDefaultFields());

  const verifyGameState = () => {
    let freeCount = 0;
    fields.forEach((field) => {
      if (field.className.split(" ").includes(config.fieldStates[0])) {
        freeCount++;
      }
    });

    let queenCount = 0;
    fields.forEach((field) => {
      if (field.className.split(" ").includes(config.fieldStates[1])) {
        queenCount++;
      }
    });

    setQueenCount(queenCount);

    if (freeCount === 0) {
      if (queenCount === 8) {
        gameWon();
      } else {
        gameLost();
      }
    }
  };

  const onSquareClick = (e) => {
    const square = e.currentTarget;

    if (gameState === config.gameStates[1]) {
      if (square.className.split(" ").includes(config.fieldStates[0])) {
        setFields(buildSquaresAfterQueenPlacement(square));
      }
    }

    verifyGameState();
  };

  const buildSquaresAfterQueenPlacement = (square) => {
    const found = fields.find(
      (f) =>
        f.rowIndex === parseInt(square.dataset.rowindex) &&
        f.columnIndex === parseInt(square.dataset.columnindex)
    );
    found.className = config.fieldStates[1];
    makeSquaresUnavailableHorizontally(square);
    makeSquaresUnavailableVertically(square);
    makeSquaresUnavailableDiagonal(square);
    makeSquaresUnavailableDiagonalReverse(square);
    return [...fields];
  };

  const makeSquaresUnavailableVertically = (square) => {
    const filtered = fields.filter(
      (f) => f.columnIndex === parseInt(square.dataset.columnindex)
    );

    filtered.forEach((field) => {
      if (field.className.split(" ").includes("free")) {
        field.className = config.fieldStates[2];
      }
    });
  };

  const makeSquaresUnavailableHorizontally = (square) => {
    const filtered = fields.filter(
      (f) => f.rowIndex === parseInt(square.dataset.rowindex)
    );

    filtered.forEach((field) => {
      if (field.className.split(" ").includes("free")) {
        field.className = config.fieldStates[2];
      }
    });
  };

  const makeSquaresUnavailableDiagonal = (square) => {
    let rowIndex = parseInt(square.dataset.rowindex);
    let columnIndex = parseInt(square.dataset.columnindex);

    while (rowIndex > 0 && columnIndex > 0) {
      rowIndex--;
      columnIndex--;
    }

    while (
      rowIndex < config.rowIndexes.length &&
      columnIndex < config.columnIndexes.length
    ) {
      const field = fields.find(
        (f) => f.rowIndex === rowIndex && f.columnIndex === columnIndex
      );
      if (field.className.split(" ").includes("free")) {
        field.className = config.fieldStates[2];
      }
      rowIndex++;
      columnIndex++;
    }
  };

  const makeSquaresUnavailableDiagonalReverse = (square) => {
    console.log(square);
    let rowIndex = parseInt(square.dataset.rowindex);
    let columnIndex = parseInt(square.dataset.columnindex);

    while (rowIndex > 0 && columnIndex < config.columnIndexes.length - 1) {
      rowIndex--;
      columnIndex++;
    }

    while (rowIndex < config.rowIndexes.length && columnIndex >= 0) {
      const field = fields.find(
        (f) => f.rowIndex === rowIndex && f.columnIndex === columnIndex
      );
      if (!field) {
        console.log("undefined field = ", rowIndex, columnIndex);
      }
      if (field.className.split(" ").includes("free")) {
        field.className = config.fieldStates[2];
      }
      rowIndex++;
      columnIndex--;
    }
  };

  const gameStart = (e) => {
    setGameState(config.gameStates[1]);
    setShowColors(true);
  };

  const gameReset = (e) => {
    setGameState(config.gameStates[2]);
    setFields(buildDefaultFields());
    setShowColors(false);
  };

  const gameWon = () => {
    setGameState(config.gameStates[3]);
  };

  const gameLost = () => {
    setGameState(config.gameStates[4]);
  };

  const toggleShowColors = () => {
    setShowColors(!showColors);
  };

  return (
    <>
      <Menu
        queenCount={queenCount}
        toggleShowColors={toggleShowColors}
        gameState={gameState}
        gameStart={gameStart}
        gameReset={gameReset}
      />
      <Board
        showColors={showColors}
        fields={fields}
        onSquareClick={onSquareClick}
      />
    </>
  );
}

export default QueensOnChessBoard;
