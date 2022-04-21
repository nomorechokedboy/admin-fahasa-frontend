export const validateErrorHelper = (error: Object) =>
  Object.entries(error)
    .map((el) => el[1])
    .flat()
    .join(' ');
