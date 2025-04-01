//  Implement a function that finds the intersection of two arrays. 

function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); 
console.log(intersection([10, 20, 30], [30, 40, 50])); 
console.log(intersection([1, 2, 3], [4, 5, 6]));
