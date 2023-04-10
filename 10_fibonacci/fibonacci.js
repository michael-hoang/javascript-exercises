const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }

    let fib = [];
    for (let i = 0; i < number; i++) {
        if (i < 2) {
            fib[i] = 1;
        } else {
            fib[i] = fib[i-2] + fib[i-1];
        }
    }
    return fib[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
