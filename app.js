function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]



//displayStringOccurrences(strings);
//HW #19
function getMostPopulatedCountry(employees) {
    //returns country with most amount of employees    
    const objCountry = employees.reduce((acc, value) => {
        Object.keys(acc).includes(value.address.country) ? acc[value.address.country]++ : acc[value.address.country] = 1;
        return acc
    }, {});
    const arrayCountry = Object.entries(objCountry);
    arrayCountry.sort(stringComp);
    return arrayCountry[0][0];
}

function stringComp(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if (res == 0) {
        res = entry1[0] < entry2[0] ? -1 : 1
    }
    return res;
}

function getMostPupulatedCountries(employees, counter) {
    //returns a given number (conter) of countries with most amount of employees
    const objCountry = {};
    employees.forEach(str => {
        if (!objCountry[str.address.country]) {
            objCountry[str.address.country] = 1;
        } else {
            objCountry[str.address.country]++;
        }
    });
    const arrayCountry = Object.entries(objCountry);
    arrayCountry.sort(stringComp);
    const arrRes = arrayCountry.map((value) => value[0]);
    return arrRes.splice(0, counter);
}
function isAnagram(word, anagram) {
    //returns true if a given anagram is indeed an angram of a given word
    //anagram must have  same length as word
    //anagram must have all letters from word
    //hello anagram examples: elolh, olleh, ohell, lehol
    //exampls non-anagrams: eloll (no h), ollehh(different length),
    // olaeh ("a" doesn't exist in word), oleh(different length)
    const wordLettersArray = Array.from(word);
    const anagramLettersArray = Array.from(anagram);
    const wordLettersOccurrences = getLettersOccurrences(wordLettersArray);
    const anagramLettersOccurrences = getLettersOccurrences(anagramLettersArray);
    testAr = Object.keys(wordLettersOccurrences);
    return testLetterrs(testAr, wordLettersOccurrences, anagramLettersOccurrences);
}
function getLettersOccurrences(array) {
    const res = {};
    array.forEach(letter => {
        if (!res[letter]) {
            res[letter] = 1;
        } else {
            res[letter]++;
        }
    });
    return res;
};
function testLetterrs(testAr, wordLettersOccurrences, anagramLettersOccurrences) {
    res = testAr.reduce((acc, val) => {
        if (wordLettersOccurrences[val] === anagramLettersOccurrences[val]) {
            acc++
        }
        return acc;
    }, 0);
    return res == testAr.length ? true : false;
}


let counter = 3
let res1 = getMostPopulatedCountry(employees);
let res2 = getMostPupulatedCountries(employees, counter);
let res3 = isAnagram("hello", "eholl");
let res4 = isAnagram("hello", "holl");
let res5;