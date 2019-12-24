# Merge an array of size n into another array of size m+n

### Procedures

- [1.Clarification]
- [2.Algorithm]
- [3.Implementation]
- [4.Testcase]
- [5.Time-Complexity]
- [6.Space-Complexity]

### Procedure :: 1 :: Clarification

#### No Clarification required as scope is fixed


### Procedure :: 2 :: Algorithm

#### Step : 1 :: Start

#### Step : 2 :: Delcare function with 2 input parameter first array with string or number and second array with number.

#### Step : 3 :: Iterate array element and replace NA of first array with second array top element.

#### Step : 4 :: Stop


### Procedure :: 3 :: Implementation

```
export const merge2Array = (arr: (string | number)[], arr2: number[]) => {
  return arr.map((x: number | string) => {
    if (x === "NA") return arr2.shift();
    else return x;
  });
};

```


### Procedure :: 4 :: Test case

#### Case :: 1 :: When array had all zero element.

#### Case :: 2 :: When array had length small then rotational count.

#### Case :: 3 :: When rotational count is more that array length.


### Procedure :: 5 :: Analysis :: Time Complexity

#### Worst Case :: Big oho :: O(n)

#### Average Case :: Big theta :: θ(n)

#### Best Case :: Big theta :: θ(1)


### Procedure :: 6 :: Analysis :: Space Complexity

#### Worst Case :: Big oho :: O(n)
