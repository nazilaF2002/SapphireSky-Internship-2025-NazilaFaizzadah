// . Implement a function to find the subarray with the maximum sum (Kadane’s Algorithm).

function maxSubarray(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 
console.log(maxSubarray([1, 2, 3, -2, 5])); 

