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
function generatePascalsTriangle(n) {
    const triangle = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            // If it's the first or last element in the row, it's 1
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                const aboveLeft = triangle[i - 1][j - 1];
                const aboveRight = triangle[i - 1][j];
                row.push(aboveLeft + aboveRight);
            }
        }
        triangle.push(row); 
    }
    // Format the triangle to display in a triangular shape
    for (let i = 0; i < n; i++) {
        let rowStr = "";
        // Add leading spaces to create the triangle effect
        for (let j = 0; j < n - i - 1; j++) {
            rowStr += " ";
        }
        // Make sure the row exists and then join the row values to form the string
        if (triangle[i]) {
            rowStr += triangle[i].join(" ");
        }
        console.log(rowStr);
    }
}

generatePascalsTriangle(5);

// ------------------------------------------------ 3 ---------------------------------------------
// Matrix Multiplication 
// Given two matrices, multiply them using nested loops.

function multiplyMatrices(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const rowsB = B.length;
    const colsB = B[0].length;
    if (colsA !== rowsB) {
        console.log('multiplication is not possible');
        
      return null;
    }
    const result = [];
    for (let i = 0; i < rowsA; i++) {
      result[i] = [];
      for (let j = 0; j < colsB; j++) {
        let sum = 0;
        for (let k = 0; k < colsA; k++) {
          sum += A[i][k] * B[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  };
  const A = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  const B = [
    [7, 8],
    [9, 10],
    [11, 12]
  ];
  const result = multiplyMatrices(A, B);
  console.log(result);
  
  