import { COMMANDS_LIST } from './constants.js';

const handleInvalidCommand = (command) => {
  const errorMessage = `No result found for '${command}' command\n\nAvailable commands:\n${COMMANDS_LIST.join(', ')}\n`;

  console.log(errorMessage);
};

export default handleInvalidCommand;
