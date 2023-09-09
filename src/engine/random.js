export const generateId = () =>
  Math.random().toString(16).slice(2);

// TODO: Recalc probability empirically
export const generateNewCellValue = () =>
  (Math.round(Math.random() * 0.7) + 1) * 2;