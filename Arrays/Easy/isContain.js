// How do you check if an array contains a specific element? 

function containsElement(arr, element) {
    if (!Array.isArray(arr)) return false;
    return arr.includes(element);
}

function testContainsElement() {
    console.log('Test 1:', containsElement([1, 2, 3, 4], 3) === true ? 'PASS' : 'FAIL');
    console.log('Test 2:', containsElement([1, 2, 3, 4], 5) === false ? 'PASS' : 'FAIL');
}
testContainsElement();
