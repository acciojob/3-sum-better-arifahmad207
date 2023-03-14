function threeSum(arr, target) {
  arr.sort((a, b) => a - b); // sort the array in ascending order

  let closestSum = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
        closestSum = currentSum;
      }

      if (currentSum > target) {
        right--;
      } else if (currentSum < target) {
        left++;
      } else {
        // if the sum is equal to the target, we have found the solution
        return closestSum;
      }
    }
  }

  return closestSum;
}
