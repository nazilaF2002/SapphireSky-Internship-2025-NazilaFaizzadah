// ---------------------------------- 6 -------------------------------------
// Check if a Number is Prime

function isPrime(n){
    if(n<=1) return false;
    let primeChecker=true;
    for(let i=2; i<n; i++){
        primeChecker=(n%i ===0 )? false:primeChecker;
    };
    return primeChecker;
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
    let greatestNumber=num1;
    let smallestNumber=num2;
    let remainder=0;
    if(num2>num1){
        greatestNumber=num2;
    }
    if(num1<num2){
        smallestNumber=num1;
    }
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

function fibonacci(n){
    let a=0;
    let b=1;
    let fib=[a,b];
    for(let i=2; i<=n; i++){
        let next=a+b;
        fib.push(next);
        a=b;
        b=next;
    };
    return fib[fib.length-1];
};
console.log('the nth number is : ',fibonacci(7));


// ---------------------------------- 10 -------------------------------------
// Check if a String is a Palindrome 

function isPalindrome(str){
    let reverse='';
    let originStr=str;
    for(let i=str.length-1; i>=0; i--){
        reverse+=str[i];
    };
    if(reverse == originStr){
       return  true;
    }
    else{
        return false;
    };
};
console.log(isPalindrome('lsl'));
console.log(isPalindrome('hello'));





