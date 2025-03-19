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
