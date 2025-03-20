// ------------------------------------------------ 1 ---------------------------------------------
// Print Prime Numbers from 1 to 100 
// Use a loop inside another loop to check for prime numbers in a range.
function printPrimeNumbers() {
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    };
};

printPrimeNumbers();


// ------------------------------------------------ 2 ---------------------------------------------
// Pascal’s Triangle 
// Generate Pascal’s Triangle up to N rows. 







// ------------------------------------------------ 3 ---------------------------------------------
// Matrix Multiplication 
// Given two matrices, multiply them using nested loops.