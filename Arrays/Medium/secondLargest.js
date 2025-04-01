// Write a function to find the second largest number in an array.

function findSecondLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) return null;
    let largest = -Infinity, secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
}

function testFindSecondLargest() {
    console.log('Test 1:', findSecondLargest([10, 20, 30, 40, 50]) === 40 ? 'PASS' : 'FAIL');
}
testFindSecondLargest();
