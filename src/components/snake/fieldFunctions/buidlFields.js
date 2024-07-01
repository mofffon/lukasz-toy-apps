import config from "../config.json";

const buildFields = (snake, bug) => {
  JSON.stringify(bug);

  const fields = [];

  const snakeHeadAndBody = snake.getSegments();

  for (let rowIndex of config.rowIndexes) {
    for (let columnIndex of config.columnIndexes) {
      let className = config.fieldStates[0];

      const foundSnake = snakeHeadAndBody.find((segment) => {
        return (
          segment.rowIndex === rowIndex && segment.columnIndex === columnIndex
        );
      });

      if (foundSnake) {
        className = foundSnake.className;
      }

      if (rowIndex === bug.rowIndex && columnIndex === bug.columnIndex) {
        className = bug.className;
      }

      fields.push({
        rowIndex,
        columnIndex,
        className,
      });
    }
  }

  return fields;
};

export default buildFields;
