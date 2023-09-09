import { CellItem } from './objects';

const GRID_SIZE = 4;

export const addCell = (sourceArray) => {
  const freeCells = [];
  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = 0; y < GRID_SIZE; y++) {
      if (
        !sourceArray
          .find(({ x: cellX, y: cellY }) =>
            (x === cellX) && (y === cellY))
      ) {
        freeCells.push({ x, y });
      }
    }
  }
  const cellCoordinatesIndex = Math.floor(Math.random() * freeCells.length);
  const { x, y } = freeCells[cellCoordinatesIndex];

  sourceArray.push(new CellItem(x, y));
}

export const gridReset = (sourceArray) => {
  sourceArray.splice(0, sourceArray.length);
  addCell(sourceArray);
  addCell(sourceArray);
}