//  How do you remove duplicates from an array efficiently? 

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([10, 10, 20, 20, 30])); 
