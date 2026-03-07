export const COMMANDS = {
  HELP: '--help',
  EXIT: '--exit',
};

export const COMMANDS_LIST = Object.values(COMMANDS);

export const DESCRIPTIONS = {
  [COMMANDS.HELP]: 'Show available input patterns',
  [COMMANDS.EXIT]: 'Stop the CLI',
};
