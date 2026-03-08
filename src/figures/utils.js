import { METRICS } from './constants.js';

export const formResult = ({ figureName, figurePerimeter, figureArea }) => {
  const nameNormalized = figureName[0].toUpperCase() + figureName.slice(1);
  const perimeterNormalized =
    METRICS.PERIMETER[0].toUpperCase() + METRICS.PERIMETER.slice(1);
  const areaNormalized =
    METRICS.AREA[0].toUpperCase() + METRICS.AREA.slice(1);

  return `\n${nameNormalized} ${perimeterNormalized} ${figurePerimeter} ${areaNormalized} ${figureArea}\n`;
};
