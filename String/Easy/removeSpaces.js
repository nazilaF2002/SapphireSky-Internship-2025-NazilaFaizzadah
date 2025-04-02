// How do you remove spaces from a given string? 

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

function runTests() {
    console.log(removeSpaces("hello world") === "helloworld" ? "PASS" : "FAIL");
    console.log(removeSpaces(" JavaScript is fun ") === "JavaScriptisfun" ? "PASS" : "FAIL");
    console.log(removeSpaces("  multiple   spaces  ") === "multiplespaces" ? "PASS" : "FAIL");
    console.log(removeSpaces("") === "" ? "PASS" : "FAIL");
    console.log(removeSpaces("noSpaces") === "noSpaces" ? "PASS" : "FAIL");
}
runTests();
