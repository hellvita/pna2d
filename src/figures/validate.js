import { FIGURES, VERTICES } from './constants.js';
import * as Figure from './models.js';

const checkVertex = ({ vertexName = null, figure = null }) => {
  if (figure === null) return null;

  switch (vertexName) {
    // ** ---- TOP RIGHT ---- ** //
    case VERTICES.topRight: {
      if (figure.top.right.x === null || figure.top.right.y === null)
        return null;

      return figure;
    }

    // ** ---- TOP LEFT ---- ** //
    case VERTICES.topLeft: {
      if (figure.top.left.x === null || figure.top.left.y === null) return null;

      return figure;
    }

    // ** ---- BOTTOM RIGHT ---- ** //
    case VERTICES.bottomRight: {
      if (figure.bottom.right.x === null || figure.bottom.right.y === null)
        return null;

      return figure;
    }

    // ** ---- BOTTOM LEFT ---- ** //
    case VERTICES.bottomLeft: {
      if (figure.bottom.left.x === null || figure.bottom.left.y === null)
        return null;

      return figure;
    }

    // ** ---- DEFAULT ---- ** //
    default: {
      return null;
    }
  }
};

// return object | null
const validateFigure = (figure) => {
  const figureName = figure[0];

  switch (figureName) {
    // ** ---- SQUARE ---- ** //
    case FIGURES.SQUARE: {
      const parsedSquare = {
        vertexName: figure[1],
        x: Number(figure[2]),
        y: Number(figure[3]),
        side: Number(figure[5]),
      };

      const square = new Figure.Square({
        name1: parsedSquare.vertexName,
        x1: parsedSquare.x,
        y1: parsedSquare.y,
        side: parsedSquare.side,
      });

      const isVertex = checkVertex({
        vertexName: parsedSquare.vertexName,
        figure: square,
      });

      if (isVertex === null) return null;

      return square;
    }

    // ** ---- RECTANGLE ---- ** //
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
        return null;

      const rectangle = new Figure.Rectangle({
        name1: parsedRectangle.vertex_1.name,
        x1: parsedRectangle.vertex_1.x,
        y1: parsedRectangle.vertex_1.y,
        name2: parsedRectangle.vertex_2.name,
        x2: parsedRectangle.vertex_2.x,
        y2: parsedRectangle.vertex_2.y,
      });

      const isVertex1 = checkVertex({
        vertexName: parsedRectangle.vertex_1.name,
        figure: rectangle,
      });
      if (isVertex1 === null) return null;

      const isVertex2 = checkVertex({
        vertexName: parsedRectangle.vertex_2.name,
        figure: rectangle,
      });
      if (isVertex2 === null) return null;

      return rectangle;
    }

    // ** ---- CIRCLE ---- ** //
    case FIGURES.CIRCLE: {
      const parsedCircle = {
        x: Number(figure[2]),
        y: Number(figure[3]),
        r: Number(figure[5]),
      };

      const circle = new Figure.Circle({
        x: parsedCircle.x,
        y: parsedCircle.y,
        r: parsedCircle.r,
      });

      if (
        circle.center.x === null ||
        circle.center.y === null ||
        circle.radius === null
      ) {
        return null;
      }

      return circle;
    }

    // ** ---- DEFAULT ---- ** //
    default: {
      return null;
    }
  }
};

export default validateFigure;
