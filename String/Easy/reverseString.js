// Write a function to reverse a string.

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function runTests() {
    console.log(reverseString("hello") === "olleh" ? "PASS" : "FAIL");
    console.log(reverseString("world") === "dlrow" ? "PASS" : "FAIL");
    console.log(reverseString("JavaScript") === "tpircSavaJ" ? "PASS" : "FAIL");
    console.log(reverseString("") === "" ? "PASS" : "FAIL");
    console.log(reverseString("a") === "a" ? "PASS" : "FAIL");
}
runTests();

