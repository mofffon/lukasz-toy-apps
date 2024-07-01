import Square from "./square";

function Board({ showColors, fields, onSquareClick }) {
  const generateSquares = () => {
    return fields.map((f, index) => {
      return (
        <Square
          showColors={showColors}
          key={index}
          rowIndex={f.rowIndex}
          columnIndex={f.columnIndex}
          className={f.className}
          onSquareClick={onSquareClick}
        />
      );
    });
  };

  return (
    <>
      <div className="queensBoard">{generateSquares()}</div>
    </>
  );
}

export default Board;
