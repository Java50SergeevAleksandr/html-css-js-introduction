const testNumber = -280.123;
const testExpression = "9000 / ((10 + 20) ** 2)";
const testReverseNumber = -280.123;

function getDigitsSum(number) {
    let num = Math.trunc(-number);    
    return sumDigits(num);     
}

function sumDigits(num) {
    let res = 0;
    while (num != 0) {
        res += num % 10;
        num = Math.trunc(num / 10);
    }
    return res;
}

function computeExpression(expressionStr) {    
    return eval(expressionStr);
}

function printAnanas() {
    let str = "A" + "A"/1 + "A" + "S";
    return str.toLowerCase()
}

function reverse(number) {
    let ansver; 
    let num = Math.trunc(number);
    num >= 0 ? ansver = positiveConc(num) : ansver = negativeConc(num);
    return ansver;
}

function positiveConc(number) {
    let str = "";
    while (number != 0) {
        str += number % 10;
        number = Math.trunc(number / 10);        
    }
    return str;
}

function negativeConc(number) {
    let str = "-";
    number = -number;
    while (number != 0) {
        str += number % 10;
        number = Math.trunc(number / 10);        
    }
    return str;
}

console.log("Result of function getDigitsSum for number:", testNumber, "is:", getDigitsSum(testNumber));
console.log("Result of function computeExpression for expression:",testExpression, "is:", computeExpression(testExpression));
console.log("Result of function printAnanas is:", printAnanas());
console.log("Result of function reverse for number:", testReverseNumber, "is:", reverse(testReverseNumber));