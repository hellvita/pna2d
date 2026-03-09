import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  printGreetings,
  printFigureValidationError,
  printCalculationError,
} from '../../src/utils/messages.js';
import { COMMANDS } from '../../src/commands/constants.js';
import { METRICS } from '../../src/figures/constants.js';

describe('Messages Utils', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  describe('printGreetings', () => {
    it('should print greeting message', () => {
      printGreetings();

      expect(console.log).toHaveBeenCalled();
      const callArgs = console.log.mock.calls[0][0];
      expect(callArgs).toContain('Enter a 2D shape description');
      expect(callArgs).toContain(COMMANDS.PATTERNS);
      expect(callArgs).toContain(COMMANDS.HELP);
    });
  });

  describe('printFigureValidationError', () => {
    it('should print validation error with input', () => {
      const invalidInput = 'invalid shape data';

      printFigureValidationError(invalidInput);

      expect(console.log).toHaveBeenCalled();
      const callArgs = console.log.mock.calls[0][0];
      expect(callArgs).toContain('invalid');
      expect(callArgs).toContain(invalidInput);
    });
  });

  describe('printCalculationError', () => {
    it('should print perimeter error when perimeter is missing', () => {
      printCalculationError({ perimeter: null, area: 10 });

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining(METRICS.PERIMETER),
      );
    });

    it('should print area error when area is missing', () => {
      printCalculationError({ perimeter: 10, area: null });

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining(METRICS.AREA),
      );
    });

    it('should print both errors when both are missing', () => {
      printCalculationError({ perimeter: null, area: null });

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining(METRICS.PERIMETER),
      );
      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining(METRICS.AREA),
      );
    });
  });
});
