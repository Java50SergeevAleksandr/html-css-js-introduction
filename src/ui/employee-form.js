import { employeeConfig } from "../config/employee-config.js";

export class EmployeeForm {
    #formElement;
    #citiesElement;
    #countriesElement;
    #inputElements;
    #yearInputElement;
    #salaryInputElement;
    constructor(idParentForm) {
        const parentFormElement = document.getElementById(idParentForm);
        if (!parentFormElement) {
            throw `wrong parent id ${idParentForm}`;
        }
        parentFormElement.innerHTML = `
        <form id="employee-form">
            <input required name="name" placeholder="enter employee name" class="form-input">
            <input required name="birthYear" type="number" placeholder="enter birth year" class="form-input">
            <input required name="salary" type="number" placeholder="enter salary" class="form-input">
            <div class="form-select-group">
                <label>Select Country</label>
                <select name="country" id="countries" class="form-select">
                    <option value=""></option>
                    
                </select>
            </div>
            <div class="form-select-group">
                <label>Select City</label>
                <select name="city" id="cities" class="form-select">
                    <option value=""></option>
                    
                </select>
            </div>
            <div class="form-buttons">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>
        </form>
        `
        this.#formElement = document.getElementById("employee-form");
        this.#countriesElement = document.getElementById("countries");
        this.#citiesElement = document.getElementById("cities");
        this.#inputElements = document.querySelectorAll("#employee-form [name]");
        this.#yearInputElement = document.querySelector('#employee-form [name=birthYear]');
        this.#salaryInputElement = document.querySelector('#employee-form [name=salary]');      
        this.setCountries();
        this.setCities();
        this.#countriesElement.addEventListener('change', () => this.setCities());        
        // this.#salaryInputElement.addEventListener('change', () => this.checkSalary());
        // this.#yearInputElement.addEventListener('change', () => this.checkYear());


    }
    setCountries() {
        this.#countriesElement.innerHTML = Object.keys(employeeConfig.countries)
            .map(country => `<option value="${country}">${country}</option>`)
    }
    setCities() {
        this.#citiesElement.innerHTML = employeeConfig.countries[this.#countriesElement.value]
            .map(city => `<option value="${city}">${city}</option>`)
    }
    checkYear() {
        if (this.#yearInputElement.value < employeeConfig.minYear) {
            alert(`birth Year must not be lesser than ${employeeConfig.minYear}`);
            this.#yearInputElement.value = "";
        } else if (employeeConfig.maxYear < this.#yearInputElement.value) {
            alert(`birth Year must not be greater than ${employeeConfig.maxYear}`);
            this.#yearInputElement.value = "";
        }
    }
    checkSalary() {
        if (this.#salaryInputElement.value < employeeConfig.minSalary) {
            alert(`salary value must not be less than ${employeeConfig.minSalary}`);
            this.#salaryInputElement.value = "";
        } else if (employeeConfig.maxSalary < this.#salaryInputElement.value) {
            alert(`salary value must not be greater than ${employeeConfig.maxSalary}`);
            this.#salaryInputElement.value = "";
        }
    }
    addFormHandler(handlerFun) {
        this.#formElement.addEventListener('submit', (event) => {
            event.preventDefault(); // canceling default handler of "submit"
            const employeeData = Array.from(this.#inputElements)
                .reduce((res, inputElement) => {
                    res[inputElement.name] = inputElement.value;
                    return res;
                }, {});
            alert(handlerFun(employeeData));
        })
    }
}