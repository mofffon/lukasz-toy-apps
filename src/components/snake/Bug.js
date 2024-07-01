import config from "./config.json";

class Bug {
  rowIndex;
  columnIndex;
  className = config.fieldStates[3];

  constructor({ rowIndex, columnIndex }) {
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
  }

  getField() {
    return {
      rowIndex: this.rowIndex,
      columnIndex: this.columnIndex,
      className: this.className,
    };
  }

  placeOutsideTheBoard() {
    this.rowIndex = -1;
    this.columnIndex = -1;
  }

  rndPlaceAgain(snake, fields) {
    const snakeSegments = snake.getSegments();

    const filteredFields = fields.filter((field) => {
      return !snakeSegments.find((segment) => {
        return (
          segment.rowIndex === field.rowIndex &&
          segment.columnIndex === field.columnIndex
        );
      });
    });

    const bugField =
      filteredFields[Math.floor(Math.random() * filteredFields.length)];

    this.rowIndex = bugField.rowIndex;
    this.columnIndex = bugField.columnIndex;
  }
}

export default Bug;
