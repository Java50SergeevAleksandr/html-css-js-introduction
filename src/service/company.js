export function createEmployee(id, name, birthYear, salary, city, country) {
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

export class Company {
    #employees //object key: <id value>, value: reference to Employee object
    constructor() {
        this.#employees = {};
    }
    addEmployee(empl) {
        //adds empl into #employees object
        //returns true if added new employee object
        //returns false if employee with a given id value already exists
        
         return Object.keys(this.#employees).includes(empl.id.toString()) ? false : (this.#employees[empl.id] = empl, true);
    }
    removeEmployee(id) {        
        //removes employee with a given id from #employees object
        //returns true if removed
        //returns false if employee with the id doesn't exist

        return Object.keys(this.#employees).includes(id.toString()) ? (delete this.#employees[id], true) : false;
    }
    getEmployeesCountry(country) {       
        //returns array of employee objects having field "country" equaled to a given country

        const resArr = [];
        for(const i in this.#employees){
            if(this.#employees[i].address.country === country){
                resArr.push(this.#employees[i]);
            } 
        }
        return resArr;
    }
    getEmployeesByAge(age) {
        //returns array of employee objects with a given age

        const resArr = [];
        for(const i in this.#employees){
            if(new Date().getFullYear() - this.#employees[i].birthYear === age){
                resArr.push(this.#employees[i]);
            } 
        }
        return resArr;
    }        
    
    getEmployeesBySalaries(salaryFrom, salaryTo) {        
        //returns array of employee objects with salary in a given closed range [salaryFrom, salaryTo]
        //if salaryFrom < 0, then get employees with salary less or equal salaryTo
        //if salaryTo , 0, then get employees with salary greater or equal salaryFrom
        //if salaryFrom < 0 && salaryTo < 0, then get all employees

        const resArr = [];
        for(const i in this.#employees){
            if(salaryFrom <= this.#employees[i].salary && this.#employees[i].salary <= ((Math.abs(salaryTo) + salaryTo) / 2 || Infinity)){
                resArr.push(this.#employees[i]);
            } 
        }  
        return resArr;
    }    
}