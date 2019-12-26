export const rotate = (arr: number[], d: number, n: number) => {
  let count = 0;
  return arr.map((x: number, index: number) => {
    if (!arr[index + d]) {
      count++;
      return arr[count - 1];
    } else return arr[index + d];
  });
};
