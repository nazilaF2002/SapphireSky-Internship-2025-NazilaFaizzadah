// Implement a function that rotates an array k times to the right.

function rotateArray(arr, k) {
    if (!Array.isArray(arr) || arr.length === 0) return arr;
    k = k % arr.length; 

    for (let i = 0; i < k; i++) {
        let lastElement = arr.pop(); 
        arr.unshift(lastElement); 
    }

    return arr;
}

function testRotateArray() {
    console.log('Test 1:', JSON.stringify(rotateArray([1, 2, 3, 4, 5], 2)) === JSON.stringify([4, 5, 1, 2, 3]) ? 'PASS' : 'FAIL');
    console.log('Test 2:', JSON.stringify(rotateArray([10, 20, 30, 40], 1)) === JSON.stringify([40, 10, 20, 30]) ? 'PASS' : 'FAIL');
    console.log('Test 3:', JSON.stringify(rotateArray([7, 8, 9], 3)) === JSON.stringify([7, 8, 9]) ? 'PASS' : 'FAIL');
    console.log('Test 4:', JSON.stringify(rotateArray([1, 2], 5)) === JSON.stringify([2, 1]) ? 'PASS' : 'FAIL');
    console.log('Test 5:', JSON.stringify(rotateArray([], 3)) === JSON.stringify([]) ? 'PASS' : 'FAIL');
}

testRotateArray();
