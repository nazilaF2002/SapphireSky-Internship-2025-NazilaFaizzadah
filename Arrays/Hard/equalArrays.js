//  How do you check if two arrays are equal? 

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); 
console.log(arraysAreEqual([1, 2, 3], [3, 2, 1])); 
