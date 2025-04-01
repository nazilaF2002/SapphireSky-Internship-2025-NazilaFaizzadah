//  Write a function to rearrange an array such that even numbers appear before odd numbers. 

function rearrangeEvenOdd(arr) {
    let evens = arr.filter(num => num % 2 === 0); 
    let odds = arr.filter(num => num % 2 !== 0); 
    return evens.concat(odds); 
}

console.log(rearrangeEvenOdd([3, 1, 2, 4, 7, 6]));
console.log(rearrangeEvenOdd([10, 21, 30, 43, 50])); 
