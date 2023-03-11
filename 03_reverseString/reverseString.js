const reverseString = function (word) {
    let reversed_word = "";
    for (i = word.length - 1; i >= 0; i--) {
        reversed_word += word[i];
    }
    return reversed_word;
};

// Do not edit below this line
module.exports = reverseString;
