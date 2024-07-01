import config from "./config.json";

const Square = ({
  rowIndex,
  columnIndex,
  showColors,
  onSquareClick,
  className,
}) => {
  let backgroundColor;

  if (showColors) {
    if (className.split(" ").includes(config.fieldStates[0])) {
      backgroundColor = "greenyellow";
    }
  }

  const style = {
    backgroundColor: backgroundColor,
  };

  const squareClasses = className + " gameSquare";

  return (
    <div
      style={style}
      data-rowindex={rowIndex}
      data-columnindex={columnIndex}
      className={squareClasses}
      onClick={onSquareClick}
    ></div>
  );
};

export default Square;
