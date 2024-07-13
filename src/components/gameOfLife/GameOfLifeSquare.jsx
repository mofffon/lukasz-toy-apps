import config from "./config.json";

const GameOfLifeSquare = ({ rowIndex, columnIndex, boardSize, className }) => {
  const style = {
    height: 800 / boardSize,
    width: 800 / boardSize,
  };

  return (
    <div
      style={style}
      className={className}
      data-rowindex={rowIndex}
      data-columnindex={columnIndex}
    ></div>
  );
};

export default GameOfLifeSquare;
