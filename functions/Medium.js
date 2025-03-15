// ---------------------------------- 6 -------------------------------------
// Check if a Number is Prime

function isPrime(n){
    if(n<=1) return false;
    for(let i=2; i<n; i++){
        if(n%i === 0){
            return false;
        }
    };
    return true;
};
console.log(isPrime(9));
console.log(isPrime(11));

// ---------------------------------- 7 -------------------------------------
// Calculate Factorial Using Recursion 

function  factorial(n){
    if(n === 0){
        return 1;
    };
    return n*factorial(n-1);
};

console.log(factorial(5));

// ---------------------------------- 8 -------------------------------------
// Find the GCD of Two Numbers using Euclidean algorithm.

function findGCD(num1,num2){
    let greatestNumber = num1 > num2 ? num1 : num2;
    let smallestNumber = num1 < num2 ? num1 : num2;    
     while(greatestNumber%smallestNumber !== 0){
         remainder=greatestNumber%smallestNumber;
         greatestNumber=smallestNumber;
         smallestNumber=remainder;
     }
     return remainder;
};
console.log('GCD IS : ',findGCD(18,48));

// ---------------------------------- 9 -------------------------------------
// Find the nth Fibonacci Number 

function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b; 
};
console.log('The nth number is:', fibonacci(7));  
console.log('the nth number is : ',fibonacci(10));


// ---------------------------------- 10 -------------------------------------
// Check if a String is a Palindrome 

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;  
};
console.log(isPalindrome('lsl'));    
console.log(isPalindrome('hello'));





