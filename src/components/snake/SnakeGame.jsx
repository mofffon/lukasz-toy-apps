import { useState, useEffect } from "react";
import "./css/snake.css";
import config from "./config.json";

import buildFields from "./fieldFunctions/buidlFields";
import Snake from "./Snake";
import Bug from "./Bug";

import SnakeMenu from "./SnakeMenu";
import Board from "./SnakeBoard";
import SnakeSteering from "./SnakeSteering";

const SnakeGame = () => {
  let [secondsCount, setSecondsCount] = useState(0);
  let [movesCount, setMovesCount] = useState(0);
  let [gameState, setGameState] = useState(config.gameStates[0]);
  let [direction, setDirection] = useState("up");
  let [gameMotor, setGameMotor] = useState({});
  let [gameScore, setGameScore] = useState(0);

  let [snake, setSnake] = useState(new Snake({ rowIndex: 12, columnIndex: 7 }));

  let [bug, setBug] = useState(new Bug({ rowIndex: 8, columnIndex: 7 }));
  let [timeInterval, setTimeInterval] = useState(2000);
  let [fields, setFields] = useState(buildFields(snake, bug));

  const intialSnakeSetup = () => {
    setSnake(new Snake({ rowIndex: 12, columnIndex: 7 }));
    setBug(new Bug({ rowIndex: 8, columnIndex: 7 }));
    setGameScore(0);
    setMovesCount(0);
    setDirection("up");
    setFields(buildFields(snake, bug));
  };

  const gameReset = () => {
    setGameState(config.gameStates[5]);
    intialSnakeSetup();
  };

  const gameStart = () => {
    setGameState(config.gameStates[1]);
    intialSnakeSetup();
    startGameMotor();
  };

  const stopGameMotor = () => {
    setSecondsCount(0);

    clearInterval(gameMotor);
    setGameMotor({});
  };

  const checkGameScore = () => {
    return gameScore >= Math.floor(fields.length * 0.65);
  };

  const onDifficultySelect = (e) => {
    const level = e.target.value;
    console.log("level", level);

    if (level === config.difficultyLevels[0]) {
      setTimeInterval(2500);
      return;
    }

    if (level === config.difficultyLevels[1]) {
      setTimeInterval(1300);
      return;
    }

    if (level === config.difficultyLevels[2]) {
      setTimeInterval(700);
      return;
    }
  };

  const directionClick = (e) => {
    const direction = e.target.innerHTML;
    setDirection(direction);
  };

  const checkIfAteBug = (head, bug) => {
    return (
      head.rowIndex === bug.rowIndex && head.columnIndex === bug.columnIndex
    );
  };

  const checkIfSnakeIsOffTheBoard = (head) => {
    if (head.rowIndex > config.rowIndexes.length - 1) {
      throw new Error("Outside of the board. Floor");
    }

    if (head.columnIndex < 0) {
      throw new Error("Outside of the board. Left wall");
    }

    if (head.columnIndex > config.columnIndexes.length - 1) {
      throw new Error("Outside of the board. Right wall");
    }

    if (head.rowIndex < 0) {
      throw new Error("Outside of the board. Sealing.");
    }
  };

  const checkIfEatingOwnTail = (head, body) => {
    if (!body) {
      return;
    }

    const filtered = body.filter(
      (segment) =>
        head.rowIndex === segment.rowIndex &&
        head.columnIndex === segment.columnIndex
    );

    if (filtered.length > 0) {
      throw new Error("Snake is eating it's own tail.");
    }
  };

  useEffect(() => {
    if (gameState !== config.gameStates[1]) {
      return;
    }

    setMovesCount(++movesCount);

    const lastSegmentDirection = snake.getLastSegmentDirection();
    snake.move(direction);

    const headAndSegments = snake.getSegments();
    let head = headAndSegments[0];
    let body = headAndSegments.slice(1, headAndSegments.length - 1);

    if (checkIfAteBug(head, bug)) {
      if (checkGameScore()) {
        endGamePlayerWon();
        return;
      }

      bug.rndPlaceAgain(snake, fields);
      snake.growOneSegment(lastSegmentDirection);
      setGameScore(++gameScore);
    }
    setFields(buildFields(snake, bug));

    try {
      checkIfEatingOwnTail(head, body);
      checkIfSnakeIsOffTheBoard(head);
    } catch (error) {
      endGamePlayerLost();
      alert(error.message + "\nGame Over");
    }
  }, [secondsCount]);

  const endGamePlayerLost = () => {
    setGameState(config.gameStates[4]);
    stopGameMotor();
  };

  const endGamePlayerWon = () => {
    alert(
      "You have earned " +
        gameScore +
        " points and won the game !!\nCongratulations !!"
    );

    setGameState(config.gameStates[3]);
    stopGameMotor();
  };

  const startGameMotor = () => {
    setGameMotor(
      setInterval(() => {
        setSecondsCount(++secondsCount);
      }, timeInterval)
    );
  };

  const gamePause = () => {
    if (gameState === config.gameStates[1]) {
      setGameState(config.gameStates[2]);
    } else {
      setGameState(config.gameStates[1]);
    }
  };

  return (
    <div className="container">
      <SnakeMenu
        gameState={gameState}
        gameStart={gameStart}
        movesCount={movesCount}
        gameScore={gameScore}
        gamePause={gamePause}
        gameReset={gameReset}
        selectDifficulty={onDifficultySelect}
      />
      <Board fields={fields} />
      <SnakeSteering directionClick={directionClick} />
    </div>
  );
};

export default SnakeGame;
