// Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.
//Procedure :: 1 :: Clarification

//Procedure :: 2 :: Algorithm
//Step : 1 :: Start
//Step : 2 :: Delcare function with input parameter number array, rotation position, array length.
//Step : 3 :: Declare variable count with inital value 0.
//Step : 4 :: Iterate array element and return element by incrementing rotation position, if value exist. otherwise return elent start with zero index and increment the counter.
//Step : 5 :: Stop

//Procedure :: 3 :: Implementation
export const rotate = (arr: number[], d: number, n: number) => {
  let count = 0;
  return arr.map((x: number, index: number) => {
    if (!arr[index + d]) {
      count++;
      return arr[count - 1];
    } else return arr[index + d];
  });
};

//Procedure :: 4 :: Test case
// When array had all zero element.
// When array had length small then rotational count.
// When rotational count is more that array length. 

//Procedure :: 5 :: Analysis :: Time Complexity
//Worst Case :: Big oho :: O(n)
//Average Case :: Big theta :: θ(n)
//Best Case :: Big theta :: Ω(1)

//Procedure :: 6 :: Analysis :: Space Complexity
//Space Complexity
//Worst Case :: Big oho :: O(n)
