
function createAddress(city, street) {
    return { city, street }
}
function createPerson(id, name, address) {
    return { id, name, address }
}
const persons = [
    createPerson(133, "Mara", createAddress("Lod", "Sokolov")),
    createPerson(124, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(128, "Olya", createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(145, "Mo", createAddress("Rehovot", "Pr.Plaut")),
    createPerson(126, "Sara", createAddress("Lod", "Sokolov")),
    createPerson(140, "Tom", createAddress("Rehovot", "Pr.Plaut"))
]

//=======================================
// 1 ) Calculate IN ONE LINE OF CODE the name of Person living in Rehovot and having maximal value of 'id'
//     The expected result: Olya
function getName(persons, city) {
    return persons.reduce((rv, p) => p.address.city === city && p.id > (rv.id || -Infinity) ? p : rv, {}).name
}


//=======================================
// 2*) Build IN ONE LINE OF CODE the statistics of persons amount per city. 
//     The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}

function getStatistics(persons) {
    // return persons.reduce((accum, value) =>  (accum[value.address.city] = (accum[value.address.city] || 0) +1, accum), {})

    return persons.reduce((rv, p) => Object.defineProperty(rv, r = [p.address.city], { value: (rv[r] || 0) + 1, writable: true }), {})


}
let test = getStatistics(persons);
let testName = getName(persons, "Rehovot");
console.log(getStatistics(persons));
