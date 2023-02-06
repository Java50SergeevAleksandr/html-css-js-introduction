import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { Table } from "./ui/table.js";
import { Tabs } from "./ui/tabs.js";

const schema = [
    {columnName: 'Employee ID', fieldName: 'id'},
    {columnName: 'Name', fieldName: 'name'},
    {columnName: "Birth Year", fieldName: 'birthYear'},
    {columnName: "Salary (NIS)", fieldName: 'salary'},
    {columnName: "Country", fieldName: 'country'},
    {columnName: "City", fieldName: 'city'}
]
const tabsSchem = [
    {tabName: 'Add Employee', sectionSelectId: 'form-section'},
    {tabName: 'Show Employees', sectionSelectId: 'table-section'}    
]
const company = new Company();
const employeeForm = new EmployeeForm("form-section");
const tableEmployees = new Table("table-section", "Employees", schema);
const tabs = new Tabs("buttons", tabsSchem);

function addEmployee(employeeData) {
   
    const employee = createEmployee(employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
        const res = company.addEmployee(employee);
        if (!res.message) {
            employeeData.id = res.id;
            tableEmployees.addRow(employeeData);
        }
        return res.message
    
}
employeeForm.addFormHandler(addEmployee)