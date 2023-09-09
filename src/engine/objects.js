import { generateId, generateNewCellValue } from './random';

export class CellItem {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.value = generateNewCellValue();
    this.id = generateId();
  }
}