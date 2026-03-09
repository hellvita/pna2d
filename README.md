# 📐 2D Shape Calculator CLI

A lightweight Node.js CLI app that calculates the **Perimeter** and **Area** of 2D shapes from simple text commands. Clean, fast and easily extensible.

---

## ✨ Features

- Calculate **Perimeter** and **Area** instantly from the command line
- Supports **Square**, **Rectangle** and **Circle** out of the box
- Designed to be extended - adding new shapes takes minutes
- Helpful built-in commands for discovery and guidance

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v22+

### Installation

```bash
npm install
```

### Run

```bash
npm run dev
```

---

## 📖 Usage

Type a shape command into the console using the patterns below.

### Example

Calculate the perimeter and area of a rectangle with diagonal vertices at `(0, 0)` and `(3, 2)`:

```
Rectangle BottomLeft 0 0 TopRight 3 2
```

**Output:**

```
Rectangle Perimeter 10 Area 6
```

---

## 🧭 Built-in Commands

| Command      | Description                   |
| ------------ | ----------------------------- |
| `--help`     | Show all available commands   |
| `--patterns` | Show available input patterns |
| `--exit`     | Stop the CLI                  |

---

## 🔧 Extending with New Shapes

The app is built to grow. Here's how to add a **Triangle** in a few steps:

### 1. Register the shape name

In `figures/constants.js`, add the new figure to `FIGURES`:

```js
export const FIGURES = {
  // ...
  TRIANGLE: 'triangle',
};
```

Optionally, add a usage example to `PROMPT_EXAMPLES`:

```js
export const PROMPT_EXAMPLES = {
  // ...
  [FIGURES.TRIANGLE]: {
    template: `${FIGURES.TRIANGLE} point1 [x_1] [y_1] point2 [x_2] [y_2] point3 [x_3] [y_3]`,
    example: `${FIGURES.TRIANGLE} Point1 5 5 Point2 8 8 Point3 10 2`,
  },
};
```

### 2. Create the model

In `figures/models.js`, define the `Triangle` class with `calculatePerimeter()` and `calculateArea()` methods:

```js
export class Triangle {
  #point1 = { x: null, y: null };
  #point2 = { x: null, y: null };
  #point3 = { x: null, y: null };

  #sideA = null;
  #sideB = null;
  #sideC = null;

  constructor({
    x1 = null,
    y1 = null,
    x2 = null,
    y2 = null,
    x3 = null,
    y3 = null,
  } = {}) {
    if (x1 !== null && y1 !== null) {
      this.#point1.x = x1;
      this.#point1.y = y1;
    }
    if (x2 !== null && y2 !== null) {
      this.#point2.x = x2;
      this.#point2.y = y2;
    }
    if (x3 !== null && y3 !== null) {
      this.#point3.x = x3;
      this.#point3.y = y3;
    }
  }

  calculatePerimeter({ decimalPlaces = 2 } = {}) {
    this.#calculateSides();
    if (this.#sideA === null || this.#sideB === null || this.#sideC === null)
      return null;
    return Number(
      (this.#sideA + this.#sideB + this.#sideC).toFixed(decimalPlaces),
    );
  }

  calculateArea({ decimalPlaces = 2 } = {}) {
    this.#calculateSides();
    if (this.#sideA === null || this.#sideB === null || this.#sideC === null)
      return null;
    const s = (this.#sideA + this.#sideB + this.#sideC) / 2;
    return Number(
      Math.sqrt(
        s * (s - this.#sideA) * (s - this.#sideB) * (s - this.#sideC),
      ).toFixed(decimalPlaces),
    );
  }

  #calculateDistance(p1, p2) {
    if (!p1 || !p2) return null;
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  }

  #calculateSides() {
    this.#sideA = this.#calculateDistance(this.#point1, this.#point2);
    this.#sideB = this.#calculateDistance(this.#point2, this.#point3);
    this.#sideC = this.#calculateDistance(this.#point3, this.#point1);
  }

  get name() {
    return FIGURES.TRIANGLE;
  }
}
```

### 3. Add validation

In `figures/validate.js`, handle the new shape inside `validateFigure()`:

```js
case FIGURES.TRIANGLE: {
  const parsedTriangle = {
        point1: {
          x: Number(figure[2]),
          y: Number(figure[3]),
        },
        point2: {
          x: Number(figure[5]),
          y: Number(figure[6]),
        },
        point3: {
          x: Number(figure[8]),
          y: Number(figure[9]),
        },
      };

      const triangle = new Figure.Triangle({
        x1: parsedTriangle.point1.x,
        y1: parsedTriangle.point1.y,
        x2: parsedTriangle.point2.x,
        y2: parsedTriangle.point2.y,
        x3: parsedTriangle.point3.x,
        y3: parsedTriangle.point3.y,
      });

  if (triangle.point1.x === null || triangle.point1.y === null) return null;
  if (triangle.point2.x === null || triangle.point2.y === null) return null;
  if (triangle.point3.x === null || triangle.point3.y === null) return null;

  return triangle;
}
```

> **Note:** `figure` is an array of tokens parsed from the input string.

### ✅ Try it out!

```
triangle point1 5 5 point2 8 8 point3 10 2
```

**Output:**

```
Triangle Perimeter 16.4 Area 12
```

---

## 💌 Feedback

Found a bug or have an idea for improvement? Reach out at **olhasereda1443@gmail.com** - feedback is always welcome!

---

## Author

Created with 💙 by [Olha Sereda](https://github.com/hellvita)
