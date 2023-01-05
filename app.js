function coloringString(str1, str2) {
    const ar1 = Array.from(str1);
    const ar2 = Array.from(str2);
    return ar1.map(function(letter, index) {
        return colorExist(ar1, ar2[index]) ? checkColor(letter, ar2[index]) : "red";
    })
}

function colorExist(ar, letter) {
    let res = ar.filter(function(smb){
        return smb === letter;
    });    
    return  !(res == 0);
}

function checkColor(letterCheck, letter) {
    return letter === letterCheck ? "green" : "yellow";
}

function getNumbersWithDigitsAmount(digitsAmount, array) {
    return array.filter(function(number){
        let res = "" + Math.abs(number);
        return res.length == digitsAmount;
    })
}

let testRes = coloringString("array", "ymrar");
console.log(testRes);

const inpArr = [111, 25,-100, -000, 1000];
const testAr = getNumbersWithDigitsAmount(3, inpArr);
console.log(testAr);