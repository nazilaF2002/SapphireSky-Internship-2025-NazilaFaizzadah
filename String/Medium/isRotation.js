// How do you check if one string is a rotation of another string? 

function isRotation(s1, s2) {
    return s1.length === s2.length && (s1 + s1).includes(s2);
}

function runTests() {
    console.log(isRotation("waterbottle", "erbottlewat") === true ? "PASS" : "FAIL");
    console.log(isRotation("hello", "lohel") === true ? "PASS" : "FAIL");
    console.log(isRotation("abc", "bac") === false ? "PASS" : "FAIL");
}

runTests();
