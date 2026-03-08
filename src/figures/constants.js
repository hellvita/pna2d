export const FIGURES = {
  SQUARE: 'square',
  RECTANGLE: 'rectangle',
  CIRCLE: 'circle',
};

export const PROMPT_EXAMPLES = {
  [FIGURES.SQUARE]: {
    template: `${FIGURES.SQUARE} [vertex] [x] [y] side [s]`,
    example: `${FIGURES.SQUARE} TopRight 1 1 Side 1`,
  },
  [FIGURES.RECTANGLE]: {
    template: `${FIGURES.RECTANGLE} [vertex_1] [x_1] [y_1] [vertex_2] [x_2] [y_2]`,
    example: `${FIGURES.RECTANGLE} TopRight 2 2 BottomLeft 1 1`,
  },
  [FIGURES.CIRCLE]: {
    template: `${FIGURES.CIRCLE} center [x] [y] radius [r]`,
    example: `${FIGURES.CIRCLE} center 1 1 radius 2`,
  },
};

export const VERTICES = {
  topRight: 'topright',
  topLeft: 'topleft',
  bottomRight: 'bottomright',
  bottomLeft: 'bottomleft',
};

export const METRICS = {
  PERIMETER: 'perimeter',
  AREA: 'area',
};
