import queen from "./crown.svg";
import config from "./config.json";

function Square({
  showColors,
  className,
  rowIndex,
  columnIndex,
  onSquareClick,
}) {
  let backgroundColor;

  if (showColors) {
    if (className.split(" ").includes(config.fieldStates[0])) {
      backgroundColor = "greenyellow";
    } else if (className.split(" ").includes(config.fieldStates[1])) {
      backgroundColor = "crimson";
    } else if (className.split(" ").includes(config.fieldStates[2])) {
      backgroundColor = "yellow";
    }
  }

  let style = {};
  if (showColors && className.split(" ").includes(config.fieldStates[1])) {
    style = {
      backgroundColor: backgroundColor,
    };
  } else if (showColors) {
    style = { backgroundColor: backgroundColor };
  }

  if (className.split(" ").includes(config.fieldStates[1])) {
    style.backgroundImage = `url(${queen})`;
    style.backgroundSize = "contain";
  }

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
}

export default Square;
