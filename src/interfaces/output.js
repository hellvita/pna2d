import start2dPA from '../app.js';

export const writeOutput = async (result) => {
  if (result) {
    console.log(result);
  }

  await start2dPA();
};
