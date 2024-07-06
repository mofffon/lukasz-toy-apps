import config from "./config.json";

const PuzzleSquare = ({
  rowIndex,
  columnIndex,
  pictureName,
  number,
  squareClick,
  gameState,
}) => {
  const squareExtraStyle =
    gameState === config.gameStates[1] &&
    number === config.boardSize * config.boardSize
      ? { opacity: 0 }
      : {};
  return (
    <img
      className="puzzleSquare"
      data-rowindex={rowIndex}
      data-columnindex={columnIndex}
      data-number={number}
      style={squareExtraStyle}
      onClick={squareClick}
      src={require(`./pictures/${pictureName + "/" + number}.jpg`)}
    />
  );
};

export default PuzzleSquare;
