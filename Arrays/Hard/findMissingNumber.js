// Write a function to find the missing number in an array of 1 to N.

function findMissingNumber(arr, n) {
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum;
}

console.log(findMissingNumber([1, 2, 3, 5], 5)); 
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); 
