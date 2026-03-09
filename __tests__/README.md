# Unit Tests

This directory contains all unit tests for the pna2d project.

## Structure

Tests are organized by the modules they test, mirroring the `src/` directory structure.

```
__tests__/
├── utils/          # Tests for utilities
├── commands/       # Tests for command modules
├── figures/        # Tests for figure calculations
├── services/       # Tests for services
└── interfaces/     # Tests for input/output interfaces
```

## Running Tests

### Run all tests

```bash
npm test
```

### Run tests in watch mode

```bash
npm test -- --watch
```

### Run specific test file

```bash
npm test -- string.test.js
```

### View test results in UI

```bash
npm run test:ui
```

### Generate coverage report

```bash
npm run test:coverage
```

## Writing Tests

Each test file follows the naming convention: `[module-name].test.js`

### Example test structure

```javascript
import { describe, it, expect } from 'vitest';
import { myFunction } from '../../src/path/to/module.js';

describe('Module Name', () => {
  describe('Function Name', () => {
    it('should do something specific', () => {
      const result = myFunction(input);
      expect(result).toBe(expectedValue);
    });
  });
});
```

## Best Practices

- **One responsibility per test**: Each test should verify a single behavior
- **Clear test names**: Use descriptive names that explain what is being tested
- **Arrange-Act-Assert**: Organize tests with setup, execution, and verification
- **Mock external dependencies**: Use `vi.mock()` for modules and `vi.spyOn()` for functions
- **Test edge cases**: Include tests for empty inputs, null values, and boundaries
- **Keep tests focused**: Avoid testing multiple concepts in a single test

## Coverage Goals

Aim for:

- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+
