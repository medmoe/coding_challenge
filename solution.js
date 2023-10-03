function solution(text) {
    let ans = ["", 0];
    let word = "";
    let vowelsCount = 0;
    const vowels = new Set(['a', 'e', 'i', 'u', 'o']);
  
    for (let char of text) {
        if (char === ' ') {
            ans = customCompare(ans, [word, vowelsCount]);
            word = "";
            vowelsCount = 0;
        } else if (char.match(/[a-zA-Z]/)) {
            word += char;
            vowelsCount = vowels.has(char) ? vowelsCount + 1 : vowelsCount;
        }
    }
    return customCompare(ans, [word, vowelsCount])[0]
}

function customCompare(tuple1, tuple2) {
    if (tuple1[0].length === tuple2[0].length) {
        return tuple1[1] >= tuple2[1] ? tuple1 : tuple2;
    }
    return tuple1[0].length > tuple2[0].length ? tuple1 : tuple2;
}

// test case
let text = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
let text2 = ""
let text3 = ',,,,,,#$%'
let text4 = 'someword,,,,##'

solution(text) === 'experience' ? console.log("Passed!") : console.log("Failed!");
solution(text2) === "" ? console.log("Passed!"): console.log("Failed!");
solution(text3) === "" ? console.log("Passed!"): console.log("Failed!");
solution(text4) === 'someword' ? console.log("Passed!") : console.log('Failed!');
// Time complexity is O(N) such that N is the length of the input string
// Space complexity is O(1) we are using a constant space for storing vowels in a set.