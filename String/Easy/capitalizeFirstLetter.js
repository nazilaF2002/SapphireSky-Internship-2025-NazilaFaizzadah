// Write a function to capitalize the first letter of each word in a string.

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

function runTests() {
    console.log(capitalizeWords("hello world") === "Hello World" ? "PASS" : "FAIL");
    console.log(capitalizeWords("javaScript is fun") === "JavaScript Is Fun" ? "PASS" : "FAIL");
    console.log(capitalizeWords("capitalize each word") === "Capitalize Each Word" ? "PASS" : "FAIL");
    console.log(capitalizeWords("a") === "A" ? "PASS" : "FAIL");
    console.log(capitalizeWords("") === "" ? "PASS" : "FAIL");
}
runTests();
