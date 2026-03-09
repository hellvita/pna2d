export const COMMANDS = {
  EXIT: '--exit',
  HELP: '--help',
  PATTERNS: '--patterns',
};

export const COMMANDS_LIST = Object.values(COMMANDS);

export const DESCRIPTIONS = {
  [COMMANDS.HELP]: 'Show the list of all command available',
  [COMMANDS.EXIT]: 'Stop the CLI',
  [COMMANDS.PATTERNS]: 'Show available input patterns',
};
