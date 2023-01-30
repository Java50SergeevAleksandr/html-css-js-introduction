// -------------------------------
// Write a functinon groupBy(array, .......), which has 
// some callback parameters and performs the following actions
// 1) breaks the array elements into groups by specified criteria
// 2) for each group performs specified reduction operation
// The same function would be able to show the following information 
// when called with different callback parameters:
// Example 1: Result: { Rehovot: 3, 'Tel-Aviv': 1, Lod: 2 }
//            would be achieved by call like :
//                    groupBy(array, elt=>elt.addres.city, (res, elt)=>res+1)
// Example 2: { 
//    Rehovot: [ 'Vasya', 'Sara', 'Olya' ],
//    'Tel-Aviv': [ 'Tolya' ],
//    Lod: [ 'Sara', 'Tolya' ]
// }
// Example 3: { 
//    Vasya:["Rehovot"], 
//    Olya: ["Rehovot"], 
//    Tolya: ["Tel-Aviv", "Lod"], 
//    Sara: ["Lod", "Rehovot"] 
// }
//
// Your tasks are:
// - Decide which parameters must have such function
// - Implement the function
// - Implement the calls of this function implementing results of Example 1 and Example 2

function createAddress(city, street) {
    return { city, street }
}
function createPerson(id, name, address) {
    return { id, name, address }
}
const persons = [
    createPerson(133, "Mara", createAddress("Lod", "Sokolov")),
    createPerson(124, "Sara", createAddress("Rehovot", "Parshani")),
    createPerson(128, "Olya", createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(145, "Mo", createAddress("Rehovot", "Pr.Plaut")),
    createPerson(126, "Sara", createAddress("Lod", "Sokolov")),
    createPerson(140, "Tolya", createAddress("Rehovot", "Pr.Plaut"))
]

function groupBy(array, displayFunction, firstParamFuntion, secondParamFuntion) {
    const obj = {};
    secondParamFuntion = secondParamFuntion || function () { };
    for (const i in array) {
        obj[firstParamFuntion(array[i])] = displayFunction(obj, firstParamFuntion(array[i]), secondParamFuntion(array[i]));
    }
    return obj;
}

let testByCityCount = groupBy(persons, (res, value) => (res[value] || 0) + 1, elt => elt.address.city);
let testByNamesInCity = groupBy(persons, (res, value1, value2) => res[value1] === undefined ? [value2] : res[value1].concat(value2),
    elt => elt.address.city, elt => elt.name);
let testByNames = groupBy(persons, (res, value1, value2) => res[value1] === undefined ? [value2] : res[value1].concat(value2),
    elt => elt.name, elt => elt.address.city);


console.log(testByNames);