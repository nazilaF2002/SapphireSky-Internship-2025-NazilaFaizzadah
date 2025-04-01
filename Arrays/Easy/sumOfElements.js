// Write a function to find the sum of all elements in an array

function sumArray(arr) {
    if (!Array.isArray(arr)) return null;
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

function testSumArray() {
    console.log('Test 1:', sumArray([1, 2, 3, 4]) === 10 ? 'PASS' : 'FAIL');
    console.log('Test 2:', sumArray([5, -5, 10]) === 10 ? 'PASS' : 'FAIL');
    console.log('Test 3:', sumArray([]) === 0 ? 'PASS' : 'FAIL');
}
testSumArray();
