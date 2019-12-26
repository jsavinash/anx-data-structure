export const cyclicallyRotate = (arr: number[]) => {
  return arr.map((x: number, idx: number) => {
    if (arr[idx + 1]) return arr[idx + 1];
    else return arr.shift();
  });
};
