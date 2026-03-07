import { readInput } from './interfaces/input.js';
import { processInput } from './services/processor.js';
import { writeOutput } from './interfaces/output.js';

const start2dPA = async () => {
  const input = await readInput();

  const result = processInput(input);

  await writeOutput(result);
};

export default start2dPA;
