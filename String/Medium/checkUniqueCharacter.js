//  Write a function to check if a string contains only unique characters.

function hasUniqueChars(s) {
    let charSet = new Set();
    for (let char of s) {
        if (charSet.has(char)) return false;
        charSet.add(char);
    }
    return true;
}

function runTests() {
    console.log(hasUniqueChars("abcdef") === true ? "PASS" : "FAIL");
    console.log(hasUniqueChars("hello") === false ? "PASS" : "FAIL");
    console.log(hasUniqueChars("world") === true ? "PASS" : "FAIL");
}

runTests();
