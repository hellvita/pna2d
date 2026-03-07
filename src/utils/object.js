export const parseNestedObject = (obj) => {
  const nestedObjsArr = Object.values(obj);

  const keys = nestedObjsArr.flatMap((child) => Object.keys(child));

  const values = nestedObjsArr.flatMap((child) => Object.values(child));

  return { keys, values };
};
