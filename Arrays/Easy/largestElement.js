// Write a function to find the largest element in an array.

function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

function testFindMax() {
    console.log('Test 1:', findMax([1, 5, 3, 9, 2]) === 9 ? 'PASS' : 'FAIL');
    console.log('Test 2:', findMax([42]) === 42 ? 'PASS' : 'FAIL');
    console.log('Test 3:', findMax([-1, -5, -2, -8]) === -1 ? 'PASS' : 'FAIL');
    console.log('Test 4:', findMax([]) === null ? 'PASS' : 'FAIL');
}
testFindMax();

