const removeFromArray = function (array, ...elements) {
    if (!Array.isArray(array)) {
        return "ERROR";
    }

    for (let element of elements) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
