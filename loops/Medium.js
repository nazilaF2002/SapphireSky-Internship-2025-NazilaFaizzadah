// ---------------------------------------- 6 -------------------------------------
// check for primer number

function primeChecker(number){
    if(number <=1) return false;
    for(let i=2; i<number; i++){
        if(number%i === 0){
            return false;
        }
        else{
            return true
        }
    };
};
console.log(primeChecker(4));



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

function findFibonacci(number){
    let a=0;
    let b=1;
    let fib=[a,b];
    for(let i=2; i<number; i++){
        let next=a+b;
        fib.push(next);
        a=b;
        b=next;
    };
    return fib;
};
console.log(findFibonacci(5));




// ---------------------------------------------- 10 -----------------------------------
// palindrome checker
// write a programe that cheecks if a given number is a palindrome (example: 121 -> true, 123 -> false).

function palindromeChecker(number){
    let revers=0;
    let originNumber=number;
    while(number>0){
        let lastIndex=number%10;
        revers=revers*10+lastIndex;
        number=Math.floor(number/10);
    }
    if (revers === originNumber){
        return true;
    }
    else{
        return false;
    };
};
console.log(palindromeChecker(121));
console.log(palindromeChecker(123));



