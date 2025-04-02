// How can you find the first non-repeating character in a string?

function firstNonRepeatingChar(s) {
    let charCount = new Map();
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (let char of s) {
        if (charCount.get(char) === 1) return char;
    }
    return null;
}

function runTests() {
    console.log(firstNonRepeatingChar("aabbc") === "c" ? "PASS" : "FAIL");
    console.log(firstNonRepeatingChar("xxyz") === "y" ? "PASS" : "FAIL");
    console.log(firstNonRepeatingChar("aabb") === null ? "PASS" : "FAIL");
}

runTests();

