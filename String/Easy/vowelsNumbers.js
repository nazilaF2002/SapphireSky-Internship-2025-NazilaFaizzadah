// How do you count the number of vowels in a string? 

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

function runTests() {
    console.log(countVowels("hello") === 2 ? "PASS" : "FAIL");
    console.log(countVowels("javascript") === 3 ? "PASS" : "FAIL");
    console.log(countVowels("rhythm") === 0 ? "PASS" : "FAIL");
    console.log(countVowels("") === 0 ? "PASS" : "FAIL");
    console.log(countVowels("AEIOU") === 5 ? "PASS" : "FAIL");
}
runTests();
