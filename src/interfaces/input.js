import readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

export const readInput = async () => {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  const input = await rl.question('\n>> ');

  rl.close();

  return input;
};

export const stopInput = () => process.exit(0);
