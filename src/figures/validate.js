import { FIGURES } from './constants.js';
import * as Figure from './models.js';

// return object | boolean
const validateFigure = (figure) => {
  const figureName = figure[0];

  switch (figureName) {
    case FIGURES.SQUARE: {
      const parsedSquare = {
        vertexName: figure[1],
        x: Number(figure[2]),
        y: Number(figure[3]),
        side: Number(figure[5]),
      };

      const square = new Figure.Square();

      let success;

      success = square.setVertex({
        vertexName: parsedSquare.vertexName,
        x: parsedSquare.x,
        y: parsedSquare.y,
      });

      if (!success) return false;

      success = square.setSide(parsedSquare.side);

      if (!success) return false;

      return square;
    }
    case FIGURES.RECTANGLE: {
      const parsedRectangle = {
        vertex_1: {
          name: figure[1],
          x: Number(figure[2]),
          y: Number(figure[3]),
        },
        vertex_2: {
          name: figure[4],
          x: Number(figure[5]),
          y: Number(figure[6]),
        },
      };

      if (parsedRectangle.vertex_1.name === parsedRectangle.vertex_2.name)
        return false;

      const rectangle = new Figure.Rectangle();

      let success;

      success = rectangle.setVertex({
        vertexName: parsedRectangle.vertex_1.name,
        x: parsedRectangle.vertex_1.x,
        y: parsedRectangle.vertex_1.y,
      });

      if (!success) return false;

      success = rectangle.setVertex({
        vertexName: parsedRectangle.vertex_2.name,
        x: parsedRectangle.vertex_2.x,
        y: parsedRectangle.vertex_2.y,
      });

      if (!success) return false;

      return rectangle;
    }
    case FIGURES.CIRCLE: {
      const parsedCircle = {
        x: Number(figure[2]),
        y: Number(figure[3]),
        r: Number(figure[5]),
      };

      const circle = new Figure.Circle();

      circle.center = { x: parsedCircle.x, y: parsedCircle.y };
      if (circle.center.x === null && circle.center.y === null) return false;

      circle.radius = parsedCircle.r;
      if (circle.radius === null) return false;

      return circle;
    }
    default: {
      return false;
    }
  }
};

export default validateFigure;
