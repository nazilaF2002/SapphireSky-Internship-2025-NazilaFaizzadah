// ------------------------------------- 11 ------------------------------
//  Generate Pascal’s Triangle 
function pascalTriangle(rows) {
    let prev = [];
    for (let i = 0; i < rows; i++) {
      const row = [1];
      for (let j = 1; j < i; j++) {
        row[j] = prev[j - 1] + prev[j];
      }
      if (i > 0) row.push(1); 
      const spaces = ' '.repeat((rows - i) * 2);
      console.log(spaces + row.join(' '));
      prev = row; 
    }
  }
  pascalTriangle(5) 

// ------------------------------------- 12 ------------------------------
//  Binary Search Algorithm 

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  console.log(binarySearch([1,2,3,4,5,6], 5));
  

// ------------------------------------- 13 ------------------------------
//  Convert Decimal to Binary 

    // 00000000
    // 0000000 1
    // 000000 2 1
    // 00000 4 2 1
    // 0000 8 4 2 1
    // 000 16 8 4 2 1
    // 00 32 16 8 4 2 1
    // 0 64 32 16 8 4 2 1
    // 128 64 32 16 8 4 2 1

    function decimalToBinary(n) {
        let result = "";
        while (n > 0) {
          result = (n % 2) + result;
          n = Math.floor(n / 2);
        }
        return result || "0";
      }
console.log(decimalToBinary(12));
  
// ------------------------------------------------ 14 --------------------------------------
// Sorting an Array Using Bubble Sort
// Write a function bubbleSort(arr) that sorts an array using the Bubble Sort algorithm

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) break;
    }
    return arr;
  }
  
// ------------------------------------------------ 15 --------------------------------------
// . Find Unique Elements in an Array
// Create findUnique(arr), which returns an array with only the unique elements from theinput array.
// Example: [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]

function findUnique(arr) {
    const countMap = new Map();
      for (let num of arr) {
      if (countMap.has(num)) {
        countMap.set(num, countMap.get(num) + 1);
      } else {
        countMap.set(num, 1);
      }
    }
    const result = [];
    for (let num of arr) {
      if (countMap.get(num) === 1) {
        result.push(num);
     }
    }
    return result;
}

console.log(findUnique([1,2,1,3,4,5,2]));





































 