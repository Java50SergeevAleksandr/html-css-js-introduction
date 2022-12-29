function getRandomMatrix(rows, columns, min, max) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < columns; j++) {
            matrix[i].push(getRandomNumber(min, max));
        }
    }
    return matrix;
}

function getRandomNumber(min, max) {
    return min + Math.trunc(Math.random() * (max - min + 1));
}

function getRandomArray(length, min, max) {
    min = min || 0;
    max = max || 1;
    const ar = [];

    for (let i= 0; i < length; i++){
        ar[i] = getRandomNumber(min, max);
    }    

    return ar;
}

function getHtmlUl(array) {
    let str = '<ul class="list_class">';    

    for (let i = 0; i < array.length; i++) {        
        str += `<li class="item_class"><div class="${array[i] === 0 ? "black" : "white"}"></div></li>`;
    }

    return str + '</ul>';
}

function transpMatrix(matrix) {
    let transMatrix = [];    
    
    for (let i = 0; i < matrix[0].length; i++){        
        transMatrix.push([]);
        for (let j = 0; j < matrix.length; j++){            
            transMatrix[i].push(matrix[j][i]);
        }
    }

    return transMatrix;
}


console.log(getHtmlUl(getRandomArray(5)));
let testMatr = getRandomMatrix(3,5,0,9);
console.log(testMatr);
console.log(transpMatrix(testMatr));
console.log(transpMatrix[1][1]);