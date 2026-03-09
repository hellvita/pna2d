export const joinTitleWithDescription = (titles = [], descriptions = []) => {
  const titlesAmount = titles.length;
  const descriptionsAmount = descriptions.length;

  if (titlesAmount < descriptionsAmount) {
    for (let i = 0; i < descriptionsAmount - titlesAmount; i++) {
      titles.push('---');
    }
  }

  let result = '';

  titles.forEach((title, id) => {
    if (id % 2 === 0) result += '\n';

    result += `\n${title}: ${descriptions[id]}`;

    if (id === titlesAmount - 1) result += '\n';
  });

  return result;
};

export const createTable = (values, descriptions, valueHeader = 'Value') => {
  const rows = [];

  for (const key of Object.keys(values)) {
    const value = values[key];
    const description = descriptions[value];

    if (description !== undefined) {
      rows.push({ value, description });
    }
  }

  if (rows.length === 0) {
    return 'No matching values.';
  }

  const descriptionHeader = 'Description';

  const valueWidth = Math.max(
    valueHeader.length,
    ...rows.map((r) => r.value.length),
  );

  const descriptionWidth = Math.max(
    descriptionHeader.length,
    ...rows.map((r) => r.description.length),
  );

  const line = `+-${'-'.repeat(valueWidth)}-+-${'-'.repeat(descriptionWidth)}-+`;

  const header = `| ${valueHeader.padEnd(valueWidth)} | ${descriptionHeader.padEnd(descriptionWidth)} |`;

  const body = rows
    .map(
      (r) =>
        `| ${r.value.padEnd(valueWidth)} | ${r.description.padEnd(descriptionWidth)} |`,
    )
    .join('\n');

  return [line, header, line, body, line].join('\n');
};
