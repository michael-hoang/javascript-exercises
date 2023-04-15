// const fibonacci = function(number) {
//     if (number < 0) {
//         return "OOPS";
//     }

//     let fib = [];
//     for (let i = 0; i < number; i++) {
//         if (i < 2) {
//             fib[i] = 1;
//         } else {
//             fib[i] = fib[i-2] + fib[i-1];
//         }
//     }
//     return fib[number - 1];
// };

const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (number === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < number; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

// Do not edit below this line
module.exports = fibonacci;
