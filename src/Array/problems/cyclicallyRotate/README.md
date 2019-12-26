# Program to cyclically rotate an array by one.

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
#### Step : 3 :: Return new array by rotating 1 cycle forward.
#### Step : 4 :: Stop

### Procedure :: 3 :: Implementation

```
export const cyclicallyRotate = (arr: number[]) => {
  return arr.map((x: number, idx: number) => {
    if (arr[idx + 1]) return arr[idx + 1];
    else return arr.shift();
  });
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
