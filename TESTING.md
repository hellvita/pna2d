# Testing Setup Guide

## Overview

The pna2d project now has a complete unit testing infrastructure using **Vitest**, a modern and fast unit testing framework for Node.js projects using ES modules.

## What Was Added

### 1. **Dependencies** (package.json)

- `vitest` - Test framework
- `@vitest/ui` - Visual test runner UI
- `@vitest/coverage-v8` - Code coverage reporting

### 2. **Configuration** (vitest.config.js)

- Node.js environment setup
- Global test API (no import needed for `describe`, `it`, `expect`)
- Coverage reporting configuration

### 3. **Test Directory Structure** (**tests**)

```
__tests__/
├── README.md                 # Testing documentation
├── TEMPLATE.test.js          # Template with examples and patterns
├── utils/
│   ├── string.test.js       # Tests for string utilities
│   └── messages.test.js      # Tests for message utilities
├── commands/
│   └── commands.test.js      # Placeholder for command tests
└── figures/
    └── figures.test.js       # Placeholder for figure tests
```

### 4. **NPM Scripts** (package.json)

- `npm test` - Run all tests in watch mode
- `npm run test:ui` - Open interactive test UI
- `npm run test:coverage` - Generate coverage reports

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the sample tests

```bash
npm test
```

This will run all tests in watch mode. You'll see:

- ✓ All tests passing
- Real-time feedback as you modify code

### 3. Explore the test UI (optional)

```bash
npm run test:ui
```

Opens a visual interface showing all tests, their status, and results.

### 4. Check code coverage

```bash
npm run test:coverage
```

Generates an HTML coverage report showing which lines of code are tested.

## Writing Your Tests

### Step 1: Create a test file

- Follow the naming convention: `[module-name].test.js`
- Place it in `__tests__` mirroring the `src/` structure
- Example: Tests for `src/services/processor.js` go in `__tests__/services/processor.test.js`

### Step 2: Use the template

Refer to [**tests**/TEMPLATE.test.js](./TEMPLATE.test.js) for:

- Test structure
- Common assertions
- Mocking patterns
- Best practices

### Step 3: Example test structure

```javascript
import { describe, it, expect } from 'vitest';
import { myFunction } from '../../src/path/to/module.js';

describe('Module Name', () => {
  it('should do something specific', () => {
    const result = myFunction('input');
    expect(result).toBe('expected output');
  });

  it('should handle edge cases', () => {
    expect(() => myFunction(null)).toThrow();
  });
});
```

## Example Tests Included

### ✓ String Utilities ([**tests**/utils/string.test.js](./utils/string.test.js))

Tests the `joinTitleWithDescription` function with:

- Basic joining of titles and descriptions
- Padding when descriptions are longer
- Empty array handling
- Edge cases

**Run:** `npm test -- string.test.js`

### ✓ Message Utilities ([**tests**/utils/messages.test.js](./utils/messages.test.js))

Tests message printing functions with:

- Console output verification using spies
- Different error conditions
- Message content validation

**Run:** `npm test -- messages.test.js`

## Common Testing Patterns

### Testing Functions

```javascript
it('should calculate sum correctly', () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
```

### Testing with Mocks

```javascript
import { vi } from 'vitest';

it('should call console.log', () => {
  vi.spyOn(console, 'log');
  myFunction();
  expect(console.log).toHaveBeenCalled();
  console.log.mockRestore();
});
```

### Testing Async Code

```javascript
it('should resolve correctly', async () => {
  const result = await asyncFunction();
  expect(result).toBe('success');
});
```

### Testing Error Conditions

```javascript
it('should throw on invalid input', () => {
  expect(() => myFunction(null)).toThrow();
});
```

## Test Commands Reference

| Command                          | Purpose                            |
| -------------------------------- | ---------------------------------- |
| `npm test`                       | Run all tests in watch mode        |
| `npm test -- --run`              | Run tests once (CI mode)           |
| `npm test -- string.test.js`     | Run specific test file             |
| `npm test -- --ui`               | Open visual test dashboard         |
| `npm run test:ui`                | Alternative: open visual dashboard |
| `npm run test:coverage`          | Generate coverage report           |
| `npm test -- --reporter=verbose` | Show detailed test output          |

## Coverage Goals

Aim for these coverage thresholds:

- **Statements:** 80%+
- **Branches:** 75%+
- **Functions:** 80%+
- **Lines:** 80%+

Check coverage with: `npm run test:coverage`

## Tips & Best Practices

1. **Keep tests focused** - One behavior per test
2. **Use clear names** - Test name should describe what it tests
3. **Arrange-Act-Assert** - Structure: setup → execute → verify
4. **Test edge cases** - Null, empty, boundary values
5. **Mock external calls** - Use `vi.mock()` and `vi.spyOn()`
6. **Run tests frequently** - Use watch mode during development
7. **Review coverage** - Identify untested code paths

## Next Steps

1. ✅ Set up the testing infrastructure (DONE)
2. → Write tests for remaining modules:
   - Commands validation
   - Figure calculations
   - Input/output interfaces
   - Services/processors
3. → Integrate tests into CI/CD pipeline
4. → Aim for 80%+ code coverage

## Useful Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Best Practices](https://vitest.dev/guide/)
- [Common Assertions](https://vitest.dev/api/expect.html)

---

**Happy Testing!** 🧪
