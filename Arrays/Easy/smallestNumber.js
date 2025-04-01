//  Implement a function to find the smallest number in an array. 

function findMin(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let min = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

function testFindMin() {
    console.log('Test 1:', findMin([1, 5, 3, -9, 2]) === -9 ? 'PASS' : 'FAIL');
    console.log('Test 2:', findMin([42]) === 42 ? 'PASS' : 'FAIL');
}
testFindMin();
