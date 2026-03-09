import { COMMANDS, DESCRIPTIONS } from './constants.js';
import { PROMPT_EXAMPLES } from '../figures/constants.js';
import { parseNestedObject } from '../utils/object.js';
import { joinTitleWithDescription } from '../utils/string.js';
import { stopInput } from '../interfaces/input.js';
import { createTable } from '../utils/string.js';

export const isCommand = (input) => {
  return input.startsWith('-');
};

export const executeCommand = (command) => {
  switch (command) {
    // ** ---- EXIT ---- ** //
    case COMMANDS.EXIT: {
      stopInput();
      break;
    }

    // ** ---- HELP ---- ** //
    case COMMANDS.HELP: {
      const helpMessage = createTable(COMMANDS, DESCRIPTIONS, 'Command');

      return helpMessage;
    }

    // ** ---- PATTERNS ---- ** //
    case COMMANDS.PATTERNS: {
      const { keys, values } = parseNestedObject(PROMPT_EXAMPLES);

      const patternsMessage = joinTitleWithDescription(keys, values);

      return patternsMessage;
    }

    // ** ---- DEFAULT ---- ** //
    default: {
      return null;
    }
  }
};
