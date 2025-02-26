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






