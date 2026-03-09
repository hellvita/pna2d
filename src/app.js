import { readInput } from './interfaces/input.js';
import { processInput } from './services/processor.js';
import { writeOutput } from './interfaces/output.js';

const start2dPA = async () => {
  // stop with the '--exit' command
  while (true) {
    const input = await readInput();

    const result = processInput(input);

    writeOutput(result);
  }
};

export default start2dPA;
