# Array Intersection

# Instructions
Write a function called arrayIntersection that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).

# Function Signature
 /**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */
function arrayIntersection(arr1: number[], arr2: number[]): number[];

# Example

```ts
arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]); // [3, 4, 5]
arrayIntersection([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]); // []
```