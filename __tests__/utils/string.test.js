import { describe, it, expect } from 'vitest';
import { joinTitleWithDescription } from '../../src/utils/string.js';

describe('String Utils', () => {
  describe('joinTitleWithDescription', () => {
    it('should join titles and descriptions correctly', () => {
      const titles = ['Title1', 'Title2'];
      const descriptions = ['Desc1', 'Desc2'];

      const result = joinTitleWithDescription(titles, descriptions);

      expect(result).toContain('Title1: Desc1');
      expect(result).toContain('Title2: Desc2');
    });

    it('should pad titles with "---" when descriptions are longer', () => {
      const titles = ['Title1'];
      const descriptions = ['Desc1', 'Desc2', 'Desc3'];

      const result = joinTitleWithDescription(titles, descriptions);

      expect(result).toContain('Title1: Desc1');
      expect(result).toContain('---: Desc2');
      expect(result).toContain('---: Desc3');
    });

    it('should handle empty arrays', () => {
      const result = joinTitleWithDescription([], []);

      expect(result).toBe('');
    });

    it('should handle only descriptions', () => {
      const result = joinTitleWithDescription([], ['Desc1', 'Desc2']);

      expect(result).toContain('---: Desc1');
      expect(result).toContain('---: Desc2');
    });
  });
});
