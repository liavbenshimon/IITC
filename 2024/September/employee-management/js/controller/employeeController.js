// employeeController.js
import { getEmployees, addEmployee, editEmployee, deleteEmployee, loadEmployeesFromLocalStorage, saveEmployeesToLocalStorage, employeesData } from '../model/employeeModel.js';
import { displayEmployees } from '../view/employeeView.js';
loadEmployeesFromLocalStorage();

document.querySelector("form").addEventListener("submit", function(ev) {
    ev.preventDefault();

    const newEmployee = {
        firstName: document.querySelector(".input-first-name").value,
        lastName: document.querySelector(".input-last-name").value,
        age: document.querySelector(".input-age").value,
        startDate: document.querySelector(".input-start-date").value,
        department: document.querySelector(".input-department").value,
        salary: document.querySelector(".input-salary").value,
    };

    addEmployee(newEmployee); // Add the new employee
    saveEmployeesToLocalStorage(); // Save to localStorage
    displayEmployees(getEmployees()); // Display updated employee list
    document.querySelector("form").reset(); // Clear form inputs
});

// Initialize the employee list on page load
displayEmployees(employeesData);
