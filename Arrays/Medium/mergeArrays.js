// How do you merge two sorted arrays into one sorted array? 

function mergeSortedArrays(arr1, arr2) {
    let merged = [], i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

function testMergeSortedArrays() {
    console.log('Test 1:', JSON.stringify(mergeSortedArrays([1, 3, 5], [2, 4, 6])) === JSON.stringify([1, 2, 3, 4, 5, 6]) ? 'PASS' : 'FAIL');
}
testMergeSortedArrays();
