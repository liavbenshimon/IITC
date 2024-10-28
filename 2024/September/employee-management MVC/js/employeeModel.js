// Sample employee data
let employeesData = [
    {
        "firstName": "Alice",
        "lastName": "Smith",
        "age": 28,
        "startDate": "2020-06-15",
        "department": "Marketing",
        "salary": 50000
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 35,
        "startDate": "2018-01-25",
        "department": "Sales",
        "salary": 60000
    },
    {
        "firstName": "Emma",
        "lastName": "Johnson",
        "age": 42,
        "startDate": "2015-03-12",
        "department": "IT",
        "salary": 70000
    },
    {
        "firstName": "Michael",
        "lastName": "Brown",
        "age": 30,
        "startDate": "2019-07-01",
        "department": "Finance",
        "salary": 55000
    },
    {
        "firstName": "Sophia",
        "lastName": "Williams",
        "age": 26,
        "startDate": "2021-05-20",
        "department": "HR",
        "salary": 45000
    },
    {
        "firstName": "David",
        "lastName": "Taylor",
        "age": 39,
        "startDate": "2017-09-14",
        "department": "Operations",
        "salary": 64000
    },
    {
        "firstName": "Laura",
        "lastName": "White",
        "age": 32,
        "startDate": "2016-11-03",
        "department": "Logistics",
        "salary": 50000
    }
];

const elForm = document.querySelector("form");

// Function to edit an employee's details

function editEmployee(employee) { 
    const newFirstName = prompt("Edit First Name:", employee.firstName);
    if (newFirstName) employee.firstName = newFirstName;
    
    const newLastName = prompt("Edit Last Name:", employee.lastName);
    if (newLastName) employee.lastName = newLastName;
    
    const newAge = prompt("Edit age:", employee.age);
    if (newAge) employee.age = newAge;
    
    const newStartDate = prompt("Edit start date:", employee.startDate);
    if (newStartDate) employee.startDate = newStartDate;
    
    const newDepartment = prompt("Edit department:", employee.department);
    if (newDepartment) employee.department = newDepartment;
    
    const newSalary = prompt("Edit salary:", employee.salary);
    if (newSalary) employee.salary = newSalary;

    saveEmployeesToLocalStorage(); // Save to localStorage
    viewEmployee(); // Refresh the display after editing
}

// Function to add a new employee
function addEmployee() {
    elForm.addEventListener("submit", function(ev) {
        ev.preventDefault(); // Prevent the default form submission

        // Create a new employee object
        const newEmployee = {
            firstName: document.querySelector(".input-first-name").value,
            lastName: document.querySelector(".input-last-name").value,
            age: document.querySelector(".input-age").value,
            startDate: document.querySelector(".input-start-date").value,
            department: document.querySelector(".input-department").value,
            salary: document.querySelector(".input-salary").value,
        };

        employeesData.push(newEmployee); // Add the new employee to the array
        saveEmployeesToLocalStorage(); // Save to localStorage
        viewEmployee(); // Display employees after adding

        // Clear the fields after adding
        elForm.reset();
    });
}

// Function to view employees
function viewEmployee(filteredEmployees = model.employeesData) {
    const elUl = document.querySelector(".view-employees");
    elUl.innerHTML = ""; // Clear the display
    filteredEmployees.forEach(idEmployee => {
        const elLi = createEmployeeListItem(idEmployee); 

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", () => model.editEmployee(idEmployee));

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => model.deleteEmployee(idEmployee));

        elLi.appendChild(editBtn); // Add the edit button
        elLi.appendChild(deleteBtn); // Add the delete button
        elUl.append(elLi); // Add the employee to the list
    });
}


// Function to delete an employee
function deleteEmployee(employee) {
    employeesData = employeesData.filter(emp => emp.firstName !== employee.firstName);
    saveEmployeesToLocalStorage(); // Save to localStorage
    viewEmployee(); // Refresh the display after deletion
}
// Function to save employees to localStorage
function saveEmployeesToLocalStorage() {
    localStorage.setItem("employeesData", JSON.stringify(employeesData));
}


export const model = {editEmployee,deleteEmployee,addEmployee,employeesData,viewEmployee}