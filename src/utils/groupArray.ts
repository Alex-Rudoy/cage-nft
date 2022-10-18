// groups array to object of arrays, where keys are fn(item)
// groupArray([1,2,3,4,5,6,7,8,9,10], item => item % 2 === 0 ? 'even' : 'odd')
// === {even: [2,4,6,8,10], odd: [1,3,5,7,9]}

export const groupArray = <T>(
  array: T[],
  fn: (element: T) => string
): Record<string, T[]> =>
  array.reduce(
    (acc, el) => ({
      ...acc,
      [fn(el)]: [...(acc[fn(el)] || []), el],
    }),
    {}
  );
