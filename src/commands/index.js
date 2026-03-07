import validateCommand from './validate.js';
import { executeCommand } from './service.js';

const processCommand = (command) => {
  const validatedCommand = validateCommand(command);

  if (!validateCommand) return null;

  const commandResult = executeCommand(validatedCommand);

  return commandResult;
};

export default processCommand;
