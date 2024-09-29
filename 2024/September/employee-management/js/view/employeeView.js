// employeeView.js
import { employeesData } from "../model/employeeModel.js";

export function createEmployeeListItem(employeesData) {
  const elLi = document.createElement("li");
  elLi.innerHTML = `
    <div class="employee-id">
      <p>${employeesData.firstName}</p>
      <p>${employeesData.lastName}</p>
      <p>${employeesData.age}</p>
      <p>${employeesData.startDate}</p>
      <p>${employeesData.department}</p>
      <p>${employeesData.salary}</p>
      
    </div>
  `;
  return elLi;
}

// Function to view employees
export function viewEmployee(employeesData) {
  elUl.innerHTML = ""; // Clear the display
  employeesData.forEach(idEmployee => {
      const elLi = createEmployeeListItem(idEmployee); 

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit-btn");
      editBtn.addEventListener("click", () => editEmployee(idEmployee));

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => deleteEmployee(idEmployee));

      elLi.appendChild(editBtn); // Add the edit button
      elLi.appendChild(deleteBtn); // Add the delete button
      elUl.append(elLi); // Add the employee to the list
  });
}

// Function to edit an employee's details
function editEmployee(employeesData) { 
    const newFirstName = prompt("Edit First Name:", employeesData.firstName);
    if (newFirstName) employeesData.firstName = newFirstName;
    
    const newLastName = prompt("Edit Last Name:", employeesData.lastName);
    if (newLastName) employeesData.lastName = newLastName;
    
    const newAge = prompt("Edit age:", employeesData.age);
    if (newAge) employeesData.age = newAge;
    
    const newStartDate = prompt("Edit start date:", employeesData.startDate);
    if (newStartDate) employeesData.startDate = newStartDate;
    
    const newDepartment = prompt("Edit department:", employeesData.department);
    if (newDepartment) employeesData.department = newDepartment;
    
    const newSalary = prompt("Edit salary:", employeesData.salary);
    if (newSalary) employeesData.salary = newSalary;

    saveEmployeesToLocalStorage(); // Save to localStorage
    viewEmployee(); // Refresh the display after editing
}

// Function to delete an employee
function deleteEmployee(employeesData) {
    employeesData = employeesData.filter(emp => emp.firstName !== employeesData.firstName);
    saveEmployeesToLocalStorage(); // Save to localStorage
    viewEmployee(); // Refresh the display after deletion
}