import config from "./config.json";
import "./css/gameOfLife.css";
import { useState, useEffect } from "react";

import GameOfLifeMenu from "./GameOfLifeMenu";
import GameOfLifeBoard from "./GameOfLifeBoard";

const GameOfLife = () => {
  let [boardSize, setBoardSize] = useState(config.minBoardSize);
  let [gameSpeed, setGameSpeed] = useState(
    (config.maxSpeed + config.minSpeed) / 2
  );

  let [turns, setTurns] = useState(0);
  let [gameState, setGameState] = useState(config.gameStates[0]);
  let [initialDensity, setInitialDensity] = useState(config.minInitialDensity);
  let [fields, setFields] = useState(buildInitialFields());
  let [gameMotor, setGameMotor] = useState({});

  const startGameMotor = () => {
    setGameMotor(
      setInterval(() => {
        setTurns(++turns);
      }, gameSpeed)
    );
  };

  const stopGameMotor = () => {
    setTurns(0);

    clearInterval(gameMotor);
  };

  const onSpeedChange = (e) => {
    setGameSpeed(e.target.value);
  };

  const onSizeChange = (e) => {
    setBoardSize(e.target.value);
  };

  function buildInitialFields() {
    const arr = [];

    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        arr.push({
          rowIndex: i,
          columnIndex: j,
          className: "gameOfLifeSquare free",
        });
      }
    }

    return arr;
  }

  const gameStartReset = () => {
    if (gameState === config.gameStates[0]) {
      setGameState(config.gameStates[1]);
      setFields(buildGameStartFields());
      startGameMotor();
    } else {
      setGameState(config.gameStates[0]);
      stopGameMotor();
      setFields(buildInitialFields());
    }
  };

  const onInitialDensityChange = (e) => {
    const density = e.target.value;
    setInitialDensity(density);
  };

  const buildGameStartFields = () => {
    const arr = [];
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        const fieldState =
          Math.random() < initialDensity / 100 ? "taken" : "free";
        arr.push({
          rowIndex: i,
          columnIndex: j,
          className: "gameOfLifeSquare " + fieldState,
        });
      }
    }
    return arr;
  };

  useEffect(() => {
    if (gameState === config.gameStates[1]) setFields(processOldFields());
    if (turns >= config.maxTurns) {
      setGameState(config.gameStates[0]);
      stopGameMotor();
      setFields(buildInitialFields());
      alert("Simulation ended!");
    }
  }, [turns]);

  useEffect(() => {
    setFields(buildInitialFields());
  }, [boardSize]);

  const processOldFields = () => {
    const arr = [];

    fields.forEach((field) => {
      if (isFieldTaken(field, fields)) {
        arr.push({
          rowIndex: field.rowIndex,
          columnIndex: field.columnIndex,
          className: "gameOfLifeSquare taken",
        });
      } else {
        arr.push({
          rowIndex: field.rowIndex,
          columnIndex: field.columnIndex,
          className: "gameOfLifeSquare free",
        });
      }
    });

    return arr;
  };

  const isFieldTaken = (field, fields) => {
    const neighbours = getNeighbours(field, fields);
    const takenNeighboursCount = neighbours.filter((n) => {
      return n.className.includes("taken");
    }).length;

    if (field.className.includes("taken")) {
      if (takenNeighboursCount === 3 || takenNeighboursCount === 2) {
        return true;
      }

      return false;
    } else {
      if (takenNeighboursCount === 3) {
        return true;
      }

      return false;
    }
  };

  const getNeighbours = (field, fields) => {
    const arr = [];
    for (let i = field.rowIndex - 1; i <= field.rowIndex + 1; i++) {
      for (let j = field.columnIndex - 1; j <= field.columnIndex + 1; j++) {
        const processedField = fields.find(
          (f) => f.rowIndex === i && f.columnIndex === j
        );

        if (processedField && field !== processedField) {
          arr.push(processedField);
        }
      }
    }

    return arr;
  };

  return (
    <>
      <GameOfLifeMenu
        gameState={gameState}
        initialDensity={initialDensity}
        onInitialDensityChange={onInitialDensityChange}
        gameStartReset={gameStartReset}
        gameSpeed={gameSpeed}
        boardSize={boardSize}
        onSpeedChange={onSpeedChange}
        onSizeChange={onSizeChange}
      />
      <GameOfLifeBoard
        fields={fields}
        boardSize={boardSize}
        gameSpeed={gameSpeed}
      />
    </>
  );
};

export default GameOfLife;
