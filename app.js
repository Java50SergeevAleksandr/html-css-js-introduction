
function createAddress(city, street) {
    return { city, street }
}
function createPerson(id, name, address) {
    return { id, name, address }
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara", createAddress("Lod", "Sokolov"))
]

//=======================================
// 1 ) Calculate IN ONE LINE OF CODE the name of Person living in Rehovot and having maximal value of 'id'
//     The expected result: Olya
function getName(persons, setCity) {
    return persons.reduce((accum, value, index) => (value.address.city === setCity && (index == 0 || value.id >= persons[index - 1].id)) ?
        value.name : accum, undefined)
}


//=======================================
// 2*) Build IN ONE LINE OF CODE the statistics of persons amount per city. 
//     The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}

function getStatistics(persons) {
    return persons.reduce((accum, value) => {
        Object.keys(accum).includes(value.address.city) ? accum[value.address.city]++ : accum[value.address.city] = 1
        return accum
    }, {})
}
let test = getStatistics(persons);
let testName = getName(persons, "Rehovot");
console.log(getStatistics(persons));
