import {model} from "./employeeModel.js";
console.log(model);


// Selecting DOM elements
const elUl = document.querySelector(".view-employees");
const departmentSelect = document.getElementById("department-filter");




// Function to load employees from localStorage
function loadEmployeesFromLocalStorage() {
    const storedEmployees = localStorage.getItem("employeesData");
    if (storedEmployees) {
        model.employeesData = JSON.parse(storedEmployees);
    }
}

// loadEmployeesFromLocalStorage();
// //preventDefult form
// const elform = document.querySelector(".form")
// elform.addEventListener("submit", function (ev) {
// ev.preventDefault()    
// })
// Function to create an employee list item
function createEmployeeListItem(employee) {
    const elLi = document.createElement("li");
    elLi.innerHTML = `
      <div class="employee-id">
        <p>${employee.firstName}</p>
        <p>${employee.lastName}</p>
        <p>${employee.age}</p>
        <p>${employee.startDate}</p>
        <p>${employee.department}</p>
        <p>${employee.salary}</p>
      </div>
    `;
    return elLi;
}


// Function to filter employees by department
function filterEmployeesByDepartment(department) {
    const filteredEmployees = (department === "")
        ? employeesData
        : employeesData.filter(employee => employee.department === department);
    viewEmployee(filteredEmployees); // Display the filtered employees
}

// Listening for change events on the filter dropdown
departmentSelect.addEventListener("change", () => {
    const selectedDepartment = departmentSelect.value; // Get the selected department
    filterEmployeesByDepartment(selectedDepartment); // Filter employees by selected department
});


// Load employees from localStorage on page load
loadEmployeesFromLocalStorage();
// addEmployee(); // Activate the add employee function
model.viewEmployee(); // Display all employees at the start

