function evenOddSort(array) {
    return array.sort(sortEvenFree);
}

function oddEvenSort(array) {
    return array.sort(function (a, b) {
        return -sortEvenFree(a, b);
    })
}

function sortEvenFree(a, b) {
    return a % 2 ? 1 : -1;
}

function sortEven(a, b) {
    let firstIsEven = Math.abs(a) % 2;
    let secondIsEven = Math.abs(b) % 2;
    return firstIsEven === secondIsEven ? 0 :
        firstIsEven ? 1 : -1;
}


function evenAscOddDesc(array) {
    // const res = even(array).concat(odd(array));
    const res = array.filter(function (number) {
        return (number % 2 === 0);
    }).sort(function (a, b) {
        return a - b;
    }).concat(array.filter(function (number) {
        return number % 2;
    }).sort(function (a, b) {
        return b - a;
    }))
    return res;
}

function evenAscOddDesc_2(array) {
    const res = array.sort(function (a, b) {
        let firstIsEven = a % 2;
        let secondIsEven = b % 2;
        return firstIsEven === secondIsEven ? a - b :
            firstIsEven ? 1 : -1;
    })
    return res.sort(function(a,b){
        return (a%2 === 1 && b%2 === 1) ? b - a : 0;        
    })
}



function getMin(array) {
    const res = array.reduce(function (sum, number) {
        return sum > number ? number : sum;
    })
    return res;
}

function getMax(array) {
    const res = array.reduce(function (sum, number) {
        return sum < number ? number : sum;
    })
    return res;
}

function getAverage(array) {
    const res = array.reduce(function (sum, number) {
        return sum + number;
    })
    return res / array.length;
}

function getMinMaxAvg(array) {
    const res = array.reduce(function (sum, number, index) {
        const resAr = [];
        resAr[0] = (sum[0] > number) ? number : sum[0];
        resAr[1] = (sum[1] < number) ? number : sum[1];
        resAr[2] = sum[2] + number;
        if (index == array.length - 1) {
            resAr[2] = resAr[2] / array.length
        }
        return resAr;
    }, [array[0], array[0], 0])
    return res;
}



console.log(`evenOddSort([20,-10,333,1000, 552, 7,-7]) result ${evenOddSort([20, -10, 333, 1000, 552, 7, -7])}`);
console.log(`oddEvenSort([20,-10,333,1000, 552, 7,-7]) result ${oddEvenSort([20, -10, 333, 1000, 552, 7, -7])}`);
console.log(`evenAscOddDesc([20,-10,333,1000, 552, 7,-7]) result ${evenAscOddDesc([20, -10, 333, 1000, 552, 7, -7])}`);
console.log(`evenAscOddDesc_2([20,-10,333,1000, 552, 7,-7]) result ${evenAscOddDesc_2([20, -10, 333, 1000, 552, 7, -7])}`);
console.log(`getMin([20,-10,333,1000, 552, 7,-7]) result ${getMin([20, -10, 333, 1000, 552, 7, -7])}`);
console.log(`getMax([20,-10,333,1000, 552, 7,-7]) result ${getMax([20, -10, 333, 1000, 552, 7, -7])}`);
console.log(`getAverage([20,-10,333,1000, 552, 7,-7]) result ${getAverage([20, -10, 333, 1000, 552, 7, -7])}`);
console.log(`getMinMaxAvg([20,-10,333,1000, 552, 7,-7]) result ${getMinMaxAvg([20, -10, 333, 1000, 552, 7, -7])}`);