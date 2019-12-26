# Write a program to reverse an array or string.

### Procedures

- [1.Clarification]
- [2.Algorithm]
- [3.Implementation]
- [4.Testcase]
- [5.Time-Complexity]
- [6.Space-Complexity]

### Procedure :: 1 :: Clarification

### Procedure :: 2 :: Algorithm
#### Step : 1 :: Start
#### Step : 2 :: Delcare a function take array or string as input.
#### Step : 3 :: Input processing, if input is string, then convert it to array.
#### Step : 4 :: Replace left with right input value, return reverse value.
#### Step : 5 :: Stop

### Procedure :: 3 :: Implementation

```
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

```

### Procedure :: 4 :: Test case
#### Case :: 1 :: When input is not array or string.

### Procedure :: 5 :: Analysis :: Time Complexity
#### Worst Case :: Big oho :: O(n)
#### Average Case :: Big theta :: θ(n)
#### Best Case :: Big omega :: Ω(1)

### Procedure :: 6 :: Analysis :: Space Complexity
#### Worst Case :: Big oho :: O(n)
