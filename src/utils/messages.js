import { COMMANDS } from '../commands/constants.js';
import { METRICS } from '../figures/constants.js';

export const printGreetings = () => {
  console.log(
    `\n** Enter a 2D shape description following the pattern:\n\n[FIGURE_NAME] [FIGURE_COORDINATES] [ADDITIONAL_DATA]\n\ntype '${COMMANDS.HELP}' for more info\n`,
  );
};

export const printFigureValidationError = (input) => {
  console.log(
    `\nThe description is invalid:\n\n${input}\n\ntype '${COMMANDS.HELP}' to see templates and examples\n`,
  );
};

export const printCalculationError = ({ perimeter, area }) => {
  if (!perimeter)
    console.log(`\n(!) Failed to calculate ${METRICS.PERIMETER}\n`);

  if (!area) console.log(`\n(!) Failed to calculate ${METRICS.AREA}\n`);
};
