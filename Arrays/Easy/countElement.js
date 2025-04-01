// Write a function to count the occurrences of a specific element in an array. 

function countOccurrences(arr, element) {
    if (!Array.isArray(arr)) return 0;
    let count = 0;
    for (let num of arr) {
        if (num === element) {
            count++;
        }
    }
    return count;
}

function testCountOccurrences() {
    console.log('Test 1:', countOccurrences([1, 2, 2, 3, 2, 4], 2) === 3 ? 'PASS' : 'FAIL');
    console.log('Test 2:', countOccurrences([5, 6, 7, 8], 10) === 0 ? 'PASS' : 'FAIL');
}
testCountOccurrences();
