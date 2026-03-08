import parseFigure from './parser.js';
import validateFigure from './validate.js';
import {
  printFigureValidationError,
  printCalculationError,
} from '../utils/messages.js';
import { formResult } from './utils.js';

const processFigure = (figure) => {
  const parsedFigure = parseFigure(figure); // array

  const validatedFigure = validateFigure(parsedFigure); // object | boolean

  if (!validatedFigure) {
    printFigureValidationError(figure);
    return null;
  }

  const figurePerimeter = validatedFigure.calculatePerimeter();
  const figureArea = validatedFigure.calculateArea();

  if (!figurePerimeter || !figureArea) {
    printCalculationError({
      perimeter: figurePerimeter,
      area: figureArea,
    });

    return null;
  }

  const result = formResult({
    figureName: validatedFigure.name,
    figurePerimeter,
    figureArea,
  });

  return result;
};

export default processFigure;
