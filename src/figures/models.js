import { FIGURES, VERTICES } from './constants.js';

// ** ---- CIRCLE ---- ** //
export class Circle {
  #center = { x: null, y: null };
  #radius = null;

  constructor({ x = null, y = null, r = null } = {}) {
    if (typeof x === 'number') this.#center.x = x;
    if (typeof y === 'number') this.#center.y = y;

    if (typeof r === 'number' && r >= 0) this.#radius = r;
  }

  calculatePerimeter({ decimalPlaces = 2 } = {}) {
    if (this.#radius === null) return null;

    const perimeter = 2 * Math.PI * this.#radius;

    return Number(perimeter.toFixed(decimalPlaces));
  }

  calculateArea({ decimalPlaces = 2 } = {}) {
    if (this.#radius === null) return null;

    const area = Math.PI * this.#radius ** 2;

    return Number(area.toFixed(decimalPlaces));
  }

  get name() {
    return FIGURES.CIRCLE;
  }

  get center() {
    return this.#center;
  }
  set center({ x, y }) {
    if (typeof x === 'number') this.#center.x = x;
    if (typeof y === 'number') this.#center.y = y;
  }

  get radius() {
    return this.#radius;
  }
  set radius(radius) {
    if (typeof radius === 'number' && radius >= 0) this.#radius = radius;
  }
}

// ** ---- RECTANGLE ---- ** //
export class Rectangle {
  #top = {
    right: { x: null, y: null },
    left: { x: null, y: null },
  };
  #bottom = {
    right: { x: null, y: null },
    left: { x: null, y: null },
  };

  #length = null;
  #width = null;

  constructor({
    name1 = null,
    x1 = null,
    y1 = null,
    name2 = null,
    x2 = null,
    y2 = null,
  } = {}) {
    if (name1 !== null && x1 !== null && y1 !== null) {
      this.setVertex({ vertexName: name1, x: x1, y: y1 });
    }

    if (name2 !== null && x2 !== null && y2 !== null) {
      this.setVertex({ vertexName: name2, x: x2, y: y2 });
    }
  }

  #calculateVertices() {
    if (
      this.#top.right.x !== null ||
      this.#top.right.y !== null ||
      this.#bottom.left.x !== null ||
      this.#bottom.left.y !== null
    ) {
      this.top.left.x = this.#bottom.left.x;
      this.top.left.y = this.#top.right.y;

      this.#bottom.right.x = this.#top.right.x;
      this.#bottom.right.y = this.#bottom.left.y;
    } else if (
      this.#top.left.x !== null ||
      this.#top.left.y !== null ||
      this.#bottom.right.x !== null ||
      this.#bottom.right.y !== null
    ) {
      this.#top.right.x = this.#bottom.right.x;
      this.#top.right.y = this.#top.left.y;

      this.#bottom.left.x = this.#top.left.x;
      this.#bottom.left.y = this.#bottom.right.y;
    }
  }

  #calculateSides() {
    this.#calculateVertices();

    const sideA = Math.abs(this.#top.left.y - this.#bottom.left.y);
    const sideB = Math.abs(this.#bottom.right.x - this.#bottom.left.x);

    if (sideA > sideB) {
      this.#length = sideA;
      this.#width = sideB;
    } else {
      this.#length = sideB;
      this.#width = sideA;
    }
  }

  calculatePerimeter({ decimalPlaces = 2 } = {}) {
    this.#calculateSides();

    if (this.#length === null || this.#width === null) return null;

    const perimeter = 2 * (this.#length + this.#width);

    return Number(perimeter.toFixed(decimalPlaces));
  }

  calculateArea({ decimalPlaces = 2 } = {}) {
    this.#calculateSides();

    if (this.#length === null || this.#width === null) return null;

    const area = this.#length * this.#width;

    return Number(area.toFixed(decimalPlaces));
  }

  setVertex({ vertexName = null, x = null, y = null }) {
    if (x === null || typeof x !== 'number') return null;
    if (y === null || typeof y !== 'number') return null;

    switch (vertexName) {
      // ** ---- TOP RIGHT ---- ** //
      case VERTICES.topRight: {
        this.#top.right.x = x;
        this.#top.right.y = y;

        break;
      }

      // ** ---- TOP LEFT ---- ** //
      case VERTICES.topLeft: {
        this.#top.left.x = x;
        this.#top.left.y = y;

        break;
      }

      // ** ---- BOTTOM RIGHT ---- ** //
      case VERTICES.bottomRight: {
        this.#bottom.right.x = x;
        this.#bottom.right.y = y;

        break;
      }

      // ** ---- BOTTOM LEFT ---- ** //
      case VERTICES.bottomLeft: {
        this.#bottom.left.x = x;
        this.#bottom.left.y = y;

        break;
      }

      // ** ---- DEFAULT ---- ** //
      default: {
        return null;
      }
    }
  }

  get name() {
    return FIGURES.RECTANGLE;
  }

  get top() {
    return this.#top;
  }
  set top({ x, y }) {
    if (typeof x === 'number') this.#top.x = x;
    if (typeof y === 'number') this.#top.y = y;
  }

  get bottom() {
    return this.#bottom;
  }
  set bottom({ x, y }) {
    if (typeof x === 'number') this.#bottom.x = x;
    if (typeof y === 'number') this.#bottom.y = y;
  }
}

// ** ---- SQUARE ---- ** //
export class Square extends Rectangle {
  #side;

  constructor({ side = null, ...rectangleParams } = {}) {
    super(rectangleParams);

    if (side !== null) this.#side = side;
  }

  calculatePerimeter({ decimalPlaces = 2 } = {}) {
    if (this.#side === null) return null;

    const perimeter = 4 * this.#side;

    return Number(perimeter.toFixed(decimalPlaces));
  }

  calculateArea({ decimalPlaces = 2 } = {}) {
    if (this.#side === null) return null;

    const area = this.#side ** 2;

    return Number(area.toFixed(decimalPlaces));
  }

  get name() {
    return FIGURES.SQUARE;
  }

  get side() {
    return this.#side;
  }
  set side(side) {
    if (typeof side === 'number' && side >= 0) this.#side = side;
  }
}
