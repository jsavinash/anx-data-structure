export const reverse = (arr: (string | number)[] | string) => {
  const arrProcessing = (arrInput: (string | number)[]) => {
    let lastIndex = arrInput.length - 1;
    return arrInput.map(() => {
        const value = arrInput[lastIndex];
        lastIndex--;
        return value;
    });
  };
  if (typeof arr === "string") {
    const stringToArray = arr.split(" ");
    return arrProcessing(stringToArray);
  } else {
    return arrProcessing(arr);
  }
};
