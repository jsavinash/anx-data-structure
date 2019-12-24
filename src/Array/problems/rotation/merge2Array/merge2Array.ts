export const merge2Array = (arr: (string | number)[], arr2: number[]) => {
  return arr.map((x: number | string) => {
    if (x === "NA") return arr2.shift();
    else return x;
  });
};
