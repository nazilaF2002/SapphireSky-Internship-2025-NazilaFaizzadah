// Write a function to reverse an array without using the built-in reverse() method.

function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

function testReverseArray() {
    console.log('Test 1:', JSON.stringify(reverseArray([1, 2, 3, 4])) === JSON.stringify([4, 3, 2, 1]) ? 'PASS' : 'FAIL');
}
testReverseArray();
