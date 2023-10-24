const reverseString = function(str) {
    let reversedStr = '';

    for (let i = str.length; i > 0; i--) {
        reversedStr += str[i-1];
    }

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
