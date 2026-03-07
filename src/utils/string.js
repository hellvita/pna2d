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
