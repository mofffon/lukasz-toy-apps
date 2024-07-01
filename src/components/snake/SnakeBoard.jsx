import { useState } from "react";

import Square from "./snakeSquare";

const Board = ({ fields, showColors, onSquareClick }) => {
  const generateSquares = () => {
    return fields.map((field) => (
      <Square
        key={JSON.stringify(field)}
        rowIndex={field.rowIndex}
        columnIndex={field.columnIndex}
        showColors={showColors}
        onSquareClick={onSquareClick}
        className={field.className}
      />
    ));
  };

  return (
    <>
      <div className="board">{generateSquares()}</div>
    </>
  );
};

export default Board;
