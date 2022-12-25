function myParseInt(str, base) {
    base = base || 10;
    str = str.trim();
    let res = 0;
    let isNegative = 1;
    let hasResult = "No";

    if (str[0] == '-' || str[0] == '+') {
        if (str[0] == '-') {
            isNegative = -1;
        }
        str = str.substring(1, str.length);
    }

    if (base > 10) {
        const codeA = 'a'.charCodeAt();
        let symbol = String.fromCharCode(codeA + base - 11);
        for (let i = 0; i < str.length; i++) {
            if (((str[i] < '0') || (str[i] > '9')) && ((str[i] < 'a') || (str[i] > symbol))) {
                break;
            } else {
                res = res * base + getCode(str[i]);
                hasResult = 1;
            }
        }
    } else {
        const codeNine = '9'.charCodeAt();
        let symbol = String.fromCharCode(codeNine + base - 10);
        for (let i = 0; i < str.length; i++) {
            if ((str[i] < '0') || (str[i] > symbol)) {
                break;
            } else {
                res = res * base + getCode(str[i]);
                hasResult = 1;
            }
        }
    }

    res *= isNegative;
    res *= hasResult;
    return res;
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}

function myToString(number, base) {
    base = base || 10;
    let res;
    (number % 1) ? res = getIntegerPart(number, base) + "." + getDecimalPart(number, base) : res = getIntegerPart(number, base);
    if (number < 0) {
        res = "-" + res;
    }
    return res;
}

function getIntegerPart(number, base) {
    let res = "";
    number = Math.trunc(Math.abs(number));
    do {
        const digit = number % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        number = Math.trunc(number / base);
    } while (number);
    return res;
}

function getDecimalPart(number, base) {
    numberDecimal = Math.abs(number) - Math.trunc(Math.abs(number));
    let numberLenght = ("" + Math.abs(number)).length;
    let intLenght = ("" + Math.trunc(Math.abs(number))).length;
    let roundNumber = numberLenght - intLenght;
    numberDecimal = Math.ceil(numberDecimal * (10 ** roundNumber));
    numberDecimal = Math.trunc(numberDecimal / 10);

    return getIntegerPart(numberDecimal, base);
}

function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol;
    if (digit < 10) {
        symbol = "" + digit;
    } else {
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }
    return symbol;
}

function printResult(func, value, base) {
    base = base || 10;
    console.log("Result of", func.name, '(', value, ',', base, ') is:', func(value, base));
}

let str1 = "-123";
let str2 = "123.35";
let str3 = "123m";
let str4 = "    -123m23  ";
let str5 = "  +123m";
let str6 = "m123m";
let str7 = "-1102";

printResult(myParseInt, str1);
printResult(myParseInt, str2);
printResult(myParseInt, str3);
printResult(myParseInt, str4);
printResult(myParseInt, str5);
printResult(myParseInt, str6);
printResult(myParseInt, str7, 2);

let testNum = parseInt(str6);
console.log('Result of parseInt(str6 = "m123m")', testNum);
testNum = parseInt(str7, 2);
console.log('Result of parseInt(str7 = "-1102", 2)', testNum);

let num1 = -123;
let num2 = 123;
let num3 = 123.45;
let num4 = -123.45678;

printResult(myToString, num1, 10);
printResult(myToString, num2, 10);

let testStr = num3.toString(10);
console.log("Result of toString 123.45 =", testStr)
printResult(myToString, num3, 10);

testStr = num4.toString(10);
console.log("Result of toString -123.45678 =", testStr)
printResult(myToString, num4, 10);

