//  Implement a function to compress a string using character counts ("aabcccccaaa" → "a2b1c5a3").

function compressString(s) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++;
        } else {
            compressed += s[i] + count;
            count = 1;
        }
    }

    return compressed.length < s.length ? compressed : s;
}

function runTests() {
    console.log(compressString("aabcccccaaa") === "a2b1c5a3" ? "PASS" : "FAIL");
    console.log(compressString("abc") === "abc" ? "PASS" : "FAIL");
    console.log(compressString("aaabb") === "a3b2" ? "PASS" : "FAIL");
}

runTests();

