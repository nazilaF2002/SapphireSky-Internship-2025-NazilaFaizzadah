// Write a function to check if two strings are anagrams.

function isAnagram(s1, s2) {
    return s1.split("").sort().join("") === s2.split("").sort().join("");
}

function runTests() {
    console.log(isAnagram("listen", "silent") === true ? "PASS" : "FAIL");
    console.log(isAnagram("hello", "world") === false ? "PASS" : "FAIL");
    console.log(isAnagram("anagram", "nagaram") === true ? "PASS" : "FAIL");
}

runTests();

