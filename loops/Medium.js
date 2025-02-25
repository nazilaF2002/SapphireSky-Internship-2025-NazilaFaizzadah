// ---------------------------------------- 6 -------------------------------------
// check for primer number

function primeChecker(number){

}


// -------------------------------------- 7 -------------------------------------------
// factorial of a numer

function factorial(number){
    let total=1;
    for(let i=1; i<=number; i++){
      total*=i;
    }
    return total;
};
console.log(factorial(5));

// --------------------------------------------- 8 --------------------------------
// Find largest and smallest in a list

function findLargestAndSmallest(arr){
    let largest=arr[0];
    let smallest=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
        if(arr[i]<smallest){
            smallest=arr[i];
        }
    }
    return ` smallest number is ${smallest} and largest number is ${largest} `;
};
console.log(findLargestAndSmallest([1,2,5,3]));

// --------------------------------------------- 9 -------------------------------------
// fibonacci sequence
// print the first N fibonacci numbers using a loop.




// ---------------------------------------------- 10 -----------------------------------
// palindrome checker
// write a programe that cheecks if a fiven number is a palindrome (example: 121 -> true, 123 -> false).




