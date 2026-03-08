import { COMMANDS } from './constants.js';
import { PROMPT_EXAMPLES } from '../figures/constants.js';
import { parseNestedObject } from '../utils/object.js';
import { joinTitleWithDescription } from '../utils/string.js';
import { stopInput } from '../interfaces/input.js';

export const isCommand = (input) => {
  return input.startsWith('-');
};

export const executeCommand = (command) => {
  switch (command) {
    case COMMANDS.HELP: {
      const { keys, values } = parseNestedObject(PROMPT_EXAMPLES);

      const helpMessage = joinTitleWithDescription(keys, values);

      return helpMessage;
    }
    case COMMANDS.EXIT: {
      stopInput();
      break;
    }
    default: {
      return null;
    }
  }
};
