import config from "./config.json";

class Snake {
  _head;
  _body = [];

  constructor({ rowIndex, columnIndex, initialBodySize = 3 }) {
    this._head = {
      rowIndex,
      columnIndex,
      className: config.fieldStates[1],
    };
    this._createBodySegments(initialBodySize);
  }

  getLastSegmentDirection = () => {
    const oldSegments = this.getSegments();
    if (oldSegments.length === 1) {
      return this.direction;
    }

    const lastSegment = oldSegments[oldSegments.length - 1];
    const prevLastSegment = oldSegments[oldSegments.length - 2];

    const rowDiff = prevLastSegment.rowIndex - lastSegment.rowIndex;
    const colDiff = prevLastSegment.columnIndex - lastSegment.columnIndex;

    if (rowDiff > 0) {
      return { rowIndex: 1, columnIndex: 0 };
    }

    if (rowDiff < 0) {
      return { rowIndex: -1, columnIndex: 0 };
    }

    if (colDiff < 0) {
      return { rowIndex: 0, columnIndex: -1 };
    }

    if (colDiff > 0) {
      return { rowIndex: 0, columnIndex: 1 };
    }
  };

  growOneSegment = (lastSegmentDirection) => {
    this._body.push({
      rowIndex:
        this._body[this._body.length - 1].rowIndex -
        lastSegmentDirection.rowIndex,
      columnIndex:
        this._body[this._body.length - 1].columnIndex -
        lastSegmentDirection.columnIndex,
      className: config.fieldStates[2],
    });
  };

  _createBodySegments(initialBodySize) {
    for (let i = 0; i < initialBodySize; i++) {
      this._body.push({
        rowIndex: this._head.rowIndex + (i + 1),
        columnIndex: this._head.columnIndex,
        className: config.fieldStates[2],
      });
    }
  }

  getSegments() {
    return [this._head, ...this._body];
  }

  _dragBody() {
    if (this._body.length === 0) {
      return;
    }

    for (let i = this._body.length - 1; i > 0; i--) {
      this._body[i].rowIndex = this._body[i - 1].rowIndex;
      this._body[i].columnIndex = this._body[i - 1].columnIndex;
    }

    this._body[0].rowIndex = this._head.rowIndex;
    this._body[0].columnIndex = this._head.columnIndex;
  }

  move(direction) {
    if (direction === "up") {
      this._dragBody();
      this._head.rowIndex--;
    } else if (direction === "down") {
      this._dragBody();
      this._head.rowIndex++;
    } else if (direction === "left") {
      this._dragBody();
      this._head.columnIndex--;
    } else if (direction === "right") {
      this._dragBody();
      this._head.columnIndex++;
    }
  }
}

export default Snake;
