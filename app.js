
function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
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


function getEmployee(employees, id) {    
    //returns reference to an Employee object with a given id value
    return employees.find(empl => empl.id === id)
}
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {   
    //returns array of Employee objects that have salary in [salaryFrom, salaryTo]
    return employees.filter(empl => salaryFrom <= empl.salary && empl.salary <= salaryTo)    
}
function getEmployeesByCity(employees, city) {    
    //returns array of Employee objects from a given city
    return employees.filter(empl => empl.address.city.toLowerCase() === city.toLowerCase())
}
function getEmployeeNames(employees) {
       //returns array of all Employee names
    return employees.map(empl => empl.name)
}
function sortEmployeesByAge(employees) {    
    //returns array of Employee objects sorted by age in ascending order
    return employees.sort((a,b) => b.birthYear - a.birthYear)
}
function computeSalaryBudget(employees) {    
    //computes and returns total salary for all Employee objects
    return employees.reduce((total, empl) => total + empl.salary, 0)
}

const emplById = getEmployee(employees, 125);
const emplBySalary = getEmployeesBySalary(employees, 15000, 20000);
const emplByCity = getEmployeesByCity(employees, "London");
const emplNames = getEmployeeNames(employees);
const emplByAge = sortEmployeesByAge(employees);
const budget = computeSalaryBudget(employees);

console.log(`getEmployee(employees, 125) => ${emplById.id}`);
console.log(`computeSalaryBudget(employees) => ${budget}`);
