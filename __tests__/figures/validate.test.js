import { describe, it, expect } from 'vitest';
import validateFigure from '../../src/figures/validate.js';

describe('Circle Validation', () => {
  it('should validate figure data', () => {
    const circle = 'circle center 1 1 radius 2'.split(' ');
    const validatedCircle = validateFigure(circle);

    // Test figure validation
    expect(validatedCircle).not.toBe(null);
    expect(validatedCircle.radius).toBe(2);
  });

  it('should reject invalid figure data', () => {
    const circle = 'circle'.split(' ');
    const validatedCircle = validateFigure(circle);

    expect(validatedCircle).toBe(null);
  });
});

describe('Square Validation', () => {
  it('should validate figure data', () => {
    const square = 'square topright 1 1 side 1'.split(' ');
    const validatedSquare = validateFigure(square);

    // Test figure validation
    expect(validatedSquare).not.toBe(null);
    expect(validatedSquare.side).toBe(1);
  });

  it('should reject invalid figure data', () => {
    const square = 'square'.split(' ');
    const validatedSquare = validateFigure(square);

    expect(validatedSquare).toBe(null);
  });
});

describe('Rectangle Validation', () => {
  it('should validate figure data', () => {
    const rectangle = 'rectangle TopRight 2 2 BottomLeft 1 1'
      .toLowerCase()
      .split(' ');
    const validatedRectangle = validateFigure(rectangle);

    // Test figure validation
    expect(validatedRectangle).not.toBe(null);
    expect(validatedRectangle.top.right.x).toBe(2);
    expect(validatedRectangle.top.right.y).toBe(2);
    expect(validatedRectangle.bottom.left.x).toBe(1);
    expect(validatedRectangle.bottom.left.y).toBe(1);
  });

  it('should reject invalid figure data', () => {
    const rectangle = 'rectangle'.split(' ');
    const validatedRectangle = validateFigure(rectangle);

    expect(validatedRectangle).toBe(null);
  });
});
