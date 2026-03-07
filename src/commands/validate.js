import { COMMANDS } from './constants.js';
import handleInvalidCommand from './errors.js';

const validateCommand = (command) => {
  if (Object.values(COMMANDS).includes(command)) {
    return command;
  }

  handleInvalidCommand(command);

  return null;
};

export default validateCommand;
