const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
const bodyElement = document.body;
const wordInputButtonElement = document.getElementById("guess-button");
let wordLettersElement;
//global variables
const questionsWords = [["Спутник Юпитера, открыт Г. Галилеем", "ЕВРОПА"], ["У какого морского обитателя прямоугольные зрачки?", "ОСЬМИНОГ"],
["Крупный ловчий, сородич орла", "БЕРКУТ"], ["Бывший муж леди Винтер из романа А. Дюма «Три мушкетера»", "АТОС"],
["Какое из семи чудес света не простояло и века", "КОЛОСС"], ["Итог трудов братьев Райт", "АЭРОПЛАН"],
["В ЮАР есть одна редкая достопримечательность — бар внутри огромного баобаба, куда могут одновременно поместиться 15 человек. \
А в качестве чего использовали баобабы в XIX веке в Австралии? ", "Тюрьма"],
["В Австралии на парковках возле некоторых торговых центров по ночам и вечерам включают классическую музыку, чтобы отпугнуть кого-то. Кого?", "Подросток"],
["Чтобы сделать комплимент женщине в Индии, нужно сравнить ее с коровой и слоном. Причем с коровой она должна быть схожа глазами, а со слоном — этим.", "Походка"],
["Титул японского императора", "ТЭННО"]];
const difMult = 0.3;
let currentIndex;
let initialLettersNumber;
let remainedLettersNumber;
let word;
//functions
function startGame() {
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    letterInputElement.readOnly = false;
    wordInputElement.disabled = false;
    letterInputElement.disabled = false;
    wordInputButtonElement.disabled = false;
    currentIndex = getNewIndex();
    questionElement.innerHTML = questionsWords[currentIndex][0];
    word = questionsWords[currentIndex][1].toUpperCase();
    playAgain.style.display = 'none';
    resultMessage.innerHTML = '';
    wordElement.innerHTML = getWordDivs();
    wordLettersElement = document.querySelectorAll(".letter");
    initialLettersNumber = Math.round(word.length * difMult);
    remainedLettersElement.innerHTML = `remained trials: ${initialLettersNumber}`;
    remainedLettersNumber = initialLettersNumber;

}
function getWordDivs() {
    let res = "";
    for (let i = 0; i < word.length; i++) {
        res = res + `<div class="letter"><p>${word[i]}</p></div>`;
    }    
    return res;
}
function getNewIndex() {
    let res = "";
    const oldWordsIndex = ["", "", "", ""];
    do {
        res = Math.trunc(Math.random() * questionsWords.length);
    }
    while (oldWordsIndex.some(value => value === res));
    oldWordsIndex.push(res);
    oldWordsIndex.shift();
    return res;
}

function checkWord() {
    return wordInputElement.value.toUpperCase() == word ? finishGame("win") : finishGame("lose");
}
function processLetter() {
    remainedLettersNumber--;
    const arWord = Array.from(word);
    let start = 0;
    let index;
    do {
        index = arWord.indexOf(letterInputElement.value.toUpperCase(), start);
        if (index > -1) {
            colorLetters(Number(index))
        };
        start = index + 1;
    } while (index > -1)

    remainedLettersElement.innerHTML = `remained trials: ${remainedLettersNumber}`;
    if (remainedLettersNumber == 0) {
        takeChance();
        remainedLettersElement.innerHTML = `remained trials: ${remainedLettersNumber} <br>Enter word </br>`;
    }
    letterInputElement.value = '';
}
function takeChance() {
    wordInputElement.readOnly = false;
    letterInputElement.readOnly = true;
    letterInputElement.disabled = true;
    letterInputElement.style.backgroundColor = document.body.style.backgroundColor;    
}
function colorLetters(index) {
    wordLettersElement[index].style.backgroundColor = "white";
}
function showWord() {
    for (let i = 0; i < word.length; i++) {
        colorLetters(Number(i));
    }
}
function finishGame(res) {
    wordInputElement.readOnly = true;
    wordInputElement.style.backgroundColor =  document.body.style.backgroundColor;
    letterInputElement.readOnly = true;
    wordInputElement.disabled = true;
    wordInputButtonElement.disabled = true;
    playAgain.style.display = "block";
    resultMessage.innerHTML = (res == "win") ? `Congratulations you have guessed the word!` :
        "Sorry, you loose!";
    showWord();
}
//actions
startGame();