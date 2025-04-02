// Write a function to check if a string is a palindrome. 

function isPalindrome(str) {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

function runTests() {
    console.log(isPalindrome("racecar") === true ? "PASS" : "FAIL");
    console.log(isPalindrome("hello") === false ? "PASS" : "FAIL");
    console.log(isPalindrome("madam") === true ? "PASS" : "FAIL");
    console.log(isPalindrome("a") === true ? "PASS" : "FAIL");
    console.log(isPalindrome("") === true ? "PASS" : "FAIL");
}
runTests();

