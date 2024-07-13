import { useState } from "react";

import GameOfLifeSquare from "./GameOfLifeSquare";

const GameOfLifeBoard = ({ fields, boardSize, gameSpeed }) => {
  const arr = fields.map((field) => (
    <GameOfLifeSquare
      key={JSON.stringify(field)}
      rowIndex={field.rowIndex}
      columnIndex={field.columnIndex}
      className={field.className}
      boardSize={boardSize}
    />
  ));

  return <div className="gameOfLifeBoard">{arr}</div>;
};

export default GameOfLifeBoard;
