export interface LooseObject {
  [key: string]: number;
}
export const sortPositiveNumber = (arr: number[]) => {
  const idxs: number[] = [];
  const values: number[] = [];
  arr.forEach((x: number, idx: number) => {
    if (x > -1) {
      idxs.push(idx);
      values.push(x);
    }
  });
  values.sort();
  idxs.forEach((x: number, idx: number) => {
    arr[x] = values[idx];
  });
  return arr;
};
