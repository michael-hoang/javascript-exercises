const palindromes = function (string) {
    let newString = '';
    for (char of string) {
        const ascii = char.charCodeAt(0) ;
        if (ascii > 64 && ascii < 91 || ascii > 96 && ascii < 123) {
            newString +=char;
        }
    }
    let reverseString = newString.split('').reverse().join('');
    if (newString.toLowerCase() === reverseString.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
