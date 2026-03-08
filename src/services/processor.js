import { normalizeInput } from '../normalizers/inputNormalizer.js';
import { isCommand } from '../commands/service.js';
import processCommand from '../commands/index.js';
import processFigure from '../figures/index.js';

export const processInput = (input) => {
  const normalizedInput = normalizeInput(input);

  if (isCommand(normalizedInput)) {
    return processCommand(normalizedInput);
  } else {
    return processFigure(normalizedInput);
  }
};
